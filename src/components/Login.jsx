import React, { useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { Link, useNavigate } from "react-router-dom";
import { toast,ToastContainer } from "react-toastify";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        { email, password }
      );
      const { token, message } = response.data;

      const decoded = jwtDecode(token);
      console.log("Logged in as:", decoded.role); 
      localStorage.setItem("token", token);
      toast.success(message || "Login successful");
      if (decoded.role === "admin") {
        window.location.href = "/admin/dashboard";
      } else {
        navigate("/home");
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
      toast.error(error.response.data.error);
      } else {
      toast.error("Login failed. Please try again.");
    }
    }
  };

  return (
    <div className="auth-container login">
      <div className="auth-image login-image"></div>
      <div className="auth-form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <p>
          Don't have an account? <Link to="/signup">signup</Link>
        </p>
      </div>
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

export default Login;
