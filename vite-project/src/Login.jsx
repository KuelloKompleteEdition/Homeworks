import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { loginUser, logoutUser, loginGoogle } from './store/Thunks';
import { checkingCredentials } from './store/authSlice';
import { auth } from './firebase/config';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { status } = useSelector(state => state.auth);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        dispatch(checkingCredentials({ status: true, email: user.email }));
      } else {
        dispatch(checkingCredentials({ status: false, email: null }));
      }
    });
    return () => unsubscribe();
  }, [dispatch]);

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(loginUser(email, password));
    setEmail('');
    setPassword('');
  };

  const handleSignOut = async () => {
    dispatch(logoutUser());
  };

  const onChangeEmail = event => {
    setEmail(event.target.value);
  };

  const onChangePassword = event => {
    setPassword(event.target.value);
  };

  const handleLoginWithGoogle = async () => {
    dispatch(loginGoogle());
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder='Email' value={email} onChange={onChangeEmail} required />
        <input type="password" placeholder='Password' value={password} onChange={onChangePassword} required />
        <button type="submit" disabled={!status}>Login</button>
        <button onClick={handleLoginWithGoogle}>Login with Google</button>
      </form>
      <div>
        <Link to="/registro">Registrarse</Link>
      </div>
    </div>
  );
};

export default Login;
