import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Auth.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmpassword: '',
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!formData.username.trim()) {
      setError('Username is required');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError('Enter a valid email');
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    if (formData.password !== formData.confirmpassword) {
      setError('Passwords do not match');
      return;
    }

    setLoading(true);

    try {
      const res = await axios.post('http://localhost:5000/api/auth/signup', {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });

      if (res.status === 200 || res.status === 201) {
        setFormData({ username: '', email: '', password: '', confirmpassword: '' });
        navigate('/login');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Signup failed');
    }

    setLoading(false);
  };

  return (
    <div className="auth-container signup">
       <div className="auth-image signup-image"></div>
      <div className="auth-form">
        <h2>Sign Up</h2>
        <p>Create your account to get started with Civix.</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <div className="password-input-wrapper flex items-center w-full relative">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="eye-icon absolute right-2"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <div className="password-input-wrapper flex items-center w-full relative">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              name="confirmpassword"
              placeholder="Confirm Password"
              value={formData.confirmpassword}
              onChange={handleChange}
              required
            />
            <span
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="eye-icon absolute right-2"
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <button type="submit" disabled={loading}>
            {loading ? 'Signing up...' : 'Sign Up'}
          </button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <p className='text-center'>Already have an account? <Link to="/login">Login</Link></p>
        </form>
      </div>
     
    </div>
  );
};

export default Signup;
