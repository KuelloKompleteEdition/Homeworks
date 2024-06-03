import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { registerUser, loginGoogle } from './store/Thunks';
import { checkingCredentials } from './store/authSlice';
import { auth } from './firebase/config';
import { Link } from 'react-router-dom';

const Registro = () => {
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
    dispatch(registerUser(email, password));
    setEmail('');
    setPassword('');
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
      <h2>Registro</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" value={email} onChange={onChangeEmail} required />
        <input type="password" placeholder="Password" value={password} onChange={onChangePassword} required />
        <button type="submit" disabled={status}>Registrarse</button>
        <button onClick={handleLoginWithGoogle}>Registrarse con Google</button>
      </form>
      <div>
        <Link to="/login">Volver al Login</Link>
      </div>
    </div>
  );
};

export default Registro;
