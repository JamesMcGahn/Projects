import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { setDoc, doc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase.config';
import { ReactComponent as ArrowRightIcon } from '../assets/svg/keyboardArrowRightIcon.svg';
import visibilityIcon from '../assets/svg/visibilityIcon.svg';
import { toast } from 'react-toastify';
import OAuth from '../components/OAuth';

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const { email, password, name } = formData;
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData((prevState) => ({ ...prevState, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('hit');
      const auth = getAuth();

      const userCred = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCred.user;
      updateProfile(auth.currentUser, { displayName: name });

      const formDataCopy = { ...formData, timestamp: serverTimestamp() };
      delete formDataCopy.password;
      await setDoc(doc(db, 'users', user.uid), formDataCopy);
      navigate('/');
    } catch (e) {
      toast.error('Opps. Something went wrong');
    }
  };

  return (
    <>
      <div className="pageContainer">
        <header>
          <p className="pageHeader">Welcome!</p>
        </header>
        <main>
          <form onSubmit={handleSubmit}>
            <input type="text" className="nameInput" placeholder="name" id="name" value={name} onChange={handleChange} />
            <input type="email" className="emailInput" placeholder="email" id="email" value={email} onChange={handleChange} />

            <div className="passwordInputDiv">
              <input
                type={showPassword ? 'text' : 'password'}
                className="passwordInput"
                placeholder="password"
                id="password"
                value={password}
                onChange={handleChange}
              />

              <img src={visibilityIcon} alt="show password" className="showPassword" onClick={() => setShowPassword((prevState) => !prevState)} />
            </div>

            <Link to="/forgot-password" className="forgotPasswordLink">
              Forgot Password
            </Link>

            <div className="signInBar">
              <p className="signInText">Sign Up</p>
              <button className="signUpButton">
                <ArrowRightIcon fill="#fff" width="34px" height="34px" />
              </button>
            </div>
          </form>
          <OAuth />
          <Link to="sign-in" className="registerLink">
            Sign In Instead
          </Link>
        </main>
      </div>
    </>
  );
}
export default SignUp;
