import { getAuth, updateProfile } from 'firebase/auth';
import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { updateDoc, doc, collection, getDocs, query, where, orderBy, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase.config';
import { toast } from 'react-toastify';
import arrowRight from '../assets/svg/keyboardArrowRightIcon.svg';
import homeIcon from '../assets/svg/homeIcon.svg';
import ListingItem from '../components/ListingItem';
import Spinner from '../components/Spinner';

function Profile() {
  const [loading, setLoading] = useState(true);
  const [listings, setListings] = useState(null);
  const auth = getAuth();
  const navigate = useNavigate();
  const [changeDetails, setChangeDetails] = useState(false);
  const [formData, setFormData] = useState({ name: auth.currentUser.displayName, email: auth.currentUser.email });

  const { name, email } = formData;

  const onLogOut = async (e) => {
    auth.signOut();
    navigate('/');
  };

  useEffect(() => {
    const fetchUserListings = async () => {
      const listingsRef = collection(db, 'listings');

      const q = query(listingsRef, where('userRef', '==', auth.currentUser.uid), orderBy('timestamp', 'desc'));

      const querySnap = await getDocs(q);

      let listings = [];

      querySnap.forEach((doc) => {
        return listings.push({
          id: doc.id,
          data: doc.data(),
        });
      });

      setListings(listings);
      setLoading(false);
    };

    fetchUserListings();
  }, [auth.currentUser.uid]);

  const onSubmit = async () => {
    try {
      if (auth.currentUser.displayName !== name) {
        await updateProfile(auth.currentUser, { displayName: name });
      }

      const userRef = doc(db, 'users', auth.currentUser.uid);
      await updateDoc(userRef, { name });
    } catch (error) {
      toast.error('Something Went Wrong.. Could Not Update');
    }
  };

  const handleChange = (e) => {
    setFormData((prevState) => ({ ...prevState, [e.target.id]: e.target.value }));
  };

  const onDelete = async (listingId) => {
    if (window.confirm('Are you sure you want to delete?')) {
      await deleteDoc(doc(db, 'listings', listingId));
      const updatedListings = listings.filter((listing) => listing.id !== listingId);
      setListings(updatedListings);
      toast.success('Succesfully delete listing');
    }
  };

  const onEdit = (listingId) => navigate(`/edit-listing/${listingId}`);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="profile">
      <header className="profileHeader">
        <p className="pageHeader">My Profile</p>
        <button className="logOut" type="button" onClick={onLogOut}>
          LogOut
        </button>
      </header>
      <main>
        <div className="profileDetailsHeader">
          <p className="profileDetailsText">Personal Details</p>
          <p
            className="changePersonalDetails"
            onClick={() => {
              changeDetails && onSubmit();
              setChangeDetails((prevState) => !prevState);
            }}
          >
            {changeDetails ? 'done' : 'change'}
          </p>
        </div>

        <div className="profileCard">
          <form>
            <input
              type="text"
              id="name"
              className={!changeDetails ? 'profileName' : 'profileNameActive'}
              disabled={!changeDetails}
              value={name}
              onChange={handleChange}
            />
            <input
              type="text"
              id="email"
              className={!changeDetails ? 'profileEmail' : 'profileEmailActive'}
              disabled={!changeDetails}
              value={email}
              onChange={handleChange}
            />
          </form>
        </div>
        <Link to="/create-listing" className="createListing">
          <img src={homeIcon} alt="home" />
          <p>Sell or rent your home</p>
          <img src={arrowRight} alt="arrow right" />
        </Link>

        {!loading && listings?.length > 0 && (
          <>
            <p className="listingText">Your Listings</p>
            <ul className="listingsList">
              {listings.map((listing) => (
                <ListingItem
                  key={listing.id}
                  listing={listing.data}
                  id={listing.id}
                  onEdit={() => onEdit(listing.id)}
                  onDelete={() => onDelete(listing.id)}
                />
              ))}
            </ul>
          </>
        )}
      </main>
    </div>
  );
}
export default Profile;
