import { useEffect, useState } from 'react';
import { collection, getDocs, query, where, orderBy, limit, startAfter } from 'firebase/firestore';
import { db } from '../firebase.config';
import { toast } from 'react-toastify';
import Spinner from '../components/Spinner';
import ListingItem from '../components/ListingItem';

function Offers() {
  const [listings, setListings] = useState(null);
  const [loading, setLoading] = useState(true);
  const [lastFetchedListing, setLastFetchedListing] = useState(null);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const listingRef = collection(db, 'listings');
        const q = query(listingRef, where('offer', '==', true), orderBy('timestamp', 'desc'), limit(10));
        const querySnap = await getDocs(q);
        const lastVisible = querySnap.docs[querySnap.docs.length - 1];
        setLastFetchedListing(lastVisible);
        let listings = [];
        querySnap.forEach((doc) => {
          return listings.push({ id: doc.id, data: doc.data() });
        });

        setListings(listings);
        setLoading(false);
      } catch {
        toast.error('Could not fetch listings');
      }
    };
    fetchListings();
  }, []);

  const onFetchMore = async () => {
    try {
      const listingRef = collection(db, 'listings');
      const q = query(listingRef, where('offer', '==', true), orderBy('timestamp', 'desc'), startAfter(lastFetchedListing), limit(10));
      const querySnap = await getDocs(q);
      const lastVisible = querySnap.docs[querySnap.docs.length - 1];
      setLastFetchedListing(lastVisible);
      let listings = [];
      querySnap.forEach((doc) => {
        return listings.push({ id: doc.id, data: doc.data() });
      });

      setListings((prevState) => [...prevState, ...listings]);
      setLoading(false);
    } catch {
      toast.error('Could not fetch listings');
    }
  };

  return (
    <div className="category">
      <header>
        <p className="pageHeader">Offers</p>
      </header>

      {loading ? (
        <Spinner />
      ) : listings && listings.length > 0 ? (
        <>
          <main>
            <ul className="categoryListings">
              {listings.map((listing) => (
                <ListingItem listing={listing.data} id={listing.id} key={listing.id} />
              ))}
            </ul>
            <br />
            <br />
            {lastFetchedListing && (
              <p className="loadMore" onClick={onFetchMore}>
                Load More
              </p>
            )}
          </main>
        </>
      ) : (
        <p>No Current Offers</p>
      )}
    </div>
  );
}
export default Offers;
