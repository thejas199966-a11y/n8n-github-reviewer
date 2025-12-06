import React, { useState } from 'react';
import './Login.css';
import { validateUser } from './forms/utility';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateUser(email, password);
    console.log('Login validation result:', isValid);
    if (isValid) {
      console.log('Login successful');
    } else {
      console.log('Login failed');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Welcome Back</h2>
        <p>Please sign in to your account</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="login-btn">Sign In</button>
        </form>
        <div className="login-footer">
          <a href="#" className="forgot-password">Forgot password?</a>
          <p>Don't have an account? <a href="#" className="sign-up">Sign up</a></p>
        </div>
      </div>
    </div>
  );
}

export default Login;
