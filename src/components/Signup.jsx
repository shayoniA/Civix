<<<<<<< fix/auth
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Auth.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { number } from "framer-motion";
import { h1 } from "framer-motion/client";
=======
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Auth.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
>>>>>>> main

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
<<<<<<< fix/auth
  const passwordChecks = [
    {
      condition: "minimum length must be 6",
      valid: formData.password.length >= 6,
    },
    {
      condition: "atleast contain 1 special character",
      valid: /[!@#$%^&*(),.?":{}|<>]/.test(formData.password),
    },
    {
      condition: "atleast contain a no.",
      valid: /[0-9]/.test(formData.password),
    },
    {
      condition: "Password and Confirm Password match",
      valid:
        formData.password === formData.confirmpassword &&
        formData.password.length > 0,
    },
  ];
  // For error messages
  const [error, setError] = useState("");
  // Handle input changes
=======

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

>>>>>>> main
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
<<<<<<< fix/auth
    setError("");
    // Simple password confirmation check
    // if (
    //   formData.password !== formData.confirmpassword &&
    //   formData.password.length >= 6
    // ) {
    //   setError("Passwords do not match");
    //   toast.error("Passwords do not match!!");
    //   return;
    // }
=======
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
>>>>>>> main

    setLoading(true);

    try {
<<<<<<< fix/auth
      const res = await axios.post("http://localhost:5000/api/auth/signup", {
=======
      const res = await axios.post('http://localhost:5000/api/auth/signup', {
>>>>>>> main
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });
<<<<<<< fix/auth
      if (res.status === 201 || res.status === 200) {
        // Redirect to login page or dashboard onsuccess\
        toast.success("sign up successful !");
        setTimeout(() => {
          navigate("/login");
        }, 3000);
=======

      if (res.status === 200 || res.status === 201) {
        setFormData({ username: '', email: '', password: '', confirmpassword: '' });
        navigate('/login');
>>>>>>> main
      }
    } catch (err) {
      const errorMsg = (await err.response?.data?.error) || "Signup failed";
      setError(errorMsg);
      toast.error(errorMsg);
    }

    setLoading(false);
  };
  const buttonStyle = {
  padding: '12px 20px',
  borderRadius: '8px',
  border: '1px solid transparent',
  backgroundColor: '#6c63ff',
  color: '#fff',
  fontWeight: 'bold',
  fontSize: '16px',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
};


  return (
    <div className="auth-container signup">
       <div className="auth-image signup-image"></div>
      <div className="auth-form">
        <h2 style={{ marginBottom: '6px'}}>Sign Up</h2>
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
<<<<<<< fix/auth
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="confirmpassword"
            placeholder="Confirm Password"
            value={formData.confirmpassword}
            onChange={handleChange}
            required
          />
          <div className="pwValidator ">
            {passwordChecks.map((e, i) => (
              <h4 key={i} style={{ color: e.valid ? "green" : "red" ,fontFamily:"sans-serif",fontWeight:"300",fontSize:"12px"}}>
                {e.valid ? "✓" : "✕"} {e.condition}
              </h4>
            ))}
          </div>
          <button type="submit">Sign Up</button>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
      <div className="auth-image signup-image"></div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        closeOnClick
        pauseOnHover
        draggable
        theme="dark"
        toastClassName="toast-body custom-toast-shadow"
        bodyClassName="text-sm font-medium"
      />
=======

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

         <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '12px' }}>
  <button
    type="submit"
    disabled={loading}
    className="auth-button"
    style={{ ...buttonStyle, backgroundColor: '#28a745', marginBottom: '6px'}}
  >
    {loading ? 'Signing up...' : 'Sign Up'}
  </button>
  <button
    type="button"
    className="auth-button"
    style={{ ...buttonStyle, backgroundColor: '#f0f0f0', color: '#333',marginBottom: '4px' }}
    onClick={() => navigate('/')}
  >
    Return to Home
  </button>
</div>

          {error && <p style={{ color: 'red' }}>{error}</p>}
          <p className='text-center' style={{marginBottom: '3px'}}>Already have an account? <Link to="/login">Login</Link></p>
        </form>
      </div>
     
>>>>>>> main
    </div>
  );
};

export default Signup;
