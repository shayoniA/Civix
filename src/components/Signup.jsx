import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Auth.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { number } from "framer-motion";
import { h1 } from "framer-motion/client";

const Signup = () => {
  const navigate = useNavigate();

  // Form state
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
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
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
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

    try {
      const res = await axios.post("http://localhost:5000/api/auth/signup", {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });
      if (res.status === 201 || res.status === 200) {
        // Redirect to login page or dashboard onsuccess\
        toast.success("sign up successful !");
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      }
    } catch (err) {
      const errorMsg = (await err.response?.data?.error) || "Signup failed";
      setError(errorMsg);
      toast.error(errorMsg);
    }
  };

  return (
    <div className="auth-container signup">
      <div className="auth-form">
        <h2>Sign Up</h2>
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
    </div>
  );
};

export default Signup;
