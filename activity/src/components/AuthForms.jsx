// File: src/components/AuthForms.jsx
import React, { useState } from 'react';
import './AuthForm.css';

const AuthForms = () => {
  const [isLoginView, setIsLoginView] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const toggleView = () => {
    setIsLoginView(!isLoginView);
    setFormData({
      email: '',
      password: '',
      confirmPassword: ''
    });
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="toggle-buttons">
          <button
            onClick={() => setIsLoginView(true)}
            className={`toggle-btn ${isLoginView ? 'active' : ''}`}
          >
            Login
          </button>
          <button
            onClick={() => setIsLoginView(false)}
            className={`toggle-btn ${!isLoginView ? 'active' : ''}`}
          >
            Signup
          </button>
        </div>

        <h2 className="form-title">
          {isLoginView ? 'Login Form' : 'Signup Form'}
        </h2>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>

          {!isLoginView && (
            <div className="form-group">
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
              />
            </div>
          )}

          {isLoginView && (
            <div className="forgot-password">
              <a href="#">Forgot password?</a>
            </div>
          )}

          <button type="submit" className="submit-btn">
            {isLoginView ? 'Login' : 'Signup'}
          </button>

          {isLoginView && (
            <p className="signup-prompt">
              Not a member?{' '}
              <button type="button" onClick={toggleView} className="link-btn">
                Signup now
              </button>
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default AuthForms;