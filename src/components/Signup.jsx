// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import "./Auth.css";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { FaEye, FaEyeSlash } from "react-icons/fa";

// const Signup = () => {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//     confirmpassword: "",
//   });

//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const passwordChecks = [
//     {
//       condition: "Minimum length must be 6",
//       valid: formData.password.length >= 6,
//     },
//     {
//       condition: "At least 1 special character",
//       valid: /[!@#$%^&*(),.?":{}|<>]/.test(formData.password),
//     },
//     {
//       condition: "At least 1 number",
//       valid: /[0-9]/.test(formData.password),
//     },
//     {
//       condition: "Password and Confirm Password match",
//       valid:
//         formData.password === formData.confirmpassword &&
//         formData.password.length > 0,
//     },
//   ];

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     // Client-side validations
//     if (!formData.username.trim()) {
//       setError("Username is required");
//       return;
//     }

//     if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       setError("Enter a valid email");
//       return;
//     }

//     if (formData.password.length < 6) {
//       setError("Password must be at least 6 characters");
//       return;
//     }

//     if (formData.password !== formData.confirmpassword) {
//       setError("Passwords do not match");
//       return;
//     }

//     setLoading(true);

//     try {
//       const res = await axios.post("http://localhost:5000/api/auth/signup", {
//         username: formData.username,
//         email: formData.email,
//         password: formData.password,
//       });

//       if (res.status === 200 || res.status === 201) {
//         toast.success("Sign up successful!");
//         setFormData({
//           username: "",
//           email: "",
//           password: "",
//           confirmpassword: "",
//         });

//         setTimeout(() => {
//           navigate("/login");
//         }, 2000);
//       }
//     } catch (err) {
//       const errorMsg = err.response?.data?.error || "Signup failed";
//       setError(errorMsg);
//       toast.error(errorMsg);
//     }

//     setLoading(false);
//   };

//   const buttonStyle = {
//     padding: "12px 20px",
//     borderRadius: "8px",
//     border: "1px solid transparent",
//     backgroundColor: "#6c63ff",
//     color: "#fff",
//     fontWeight: "bold",
//     fontSize: "16px",
//     transition: "all 0.3s ease",
//     cursor: "pointer",
//   };

//   return (
//     <div className="auth-container signup">
//       <div className="auth-image signup-image"></div>
//       <div className="auth-form">
//         <h2 style={{ marginBottom: "6px" }}>Sign Up</h2>
//         <p>Create your account to get started with Civix.</p>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             name="username"
//             placeholder="Username"
//             value={formData.username}
//             onChange={handleChange}
//             required
//           />

//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />

//           {/* Password Field */}
//           <div className="password-input-wrapper" style={{ position: "relative" }}>
//             <input
//               type={showPassword ? "text" : "password"}
//               name="password"
//               placeholder="Password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//               style={{ paddingRight: "40px" }}
//             />
//             <span
//               onClick={() => setShowPassword(!showPassword)}
//               className="eye-icon"
//               style={{
//                 position: "absolute",
//                 right: "10px",
//                 top: "50%",
//                 transform: "translateY(-50%)",
//                 cursor: "pointer",
//               }}
//             >
//               {showPassword ? <FaEyeSlash /> : <FaEye />}
//             </span>
//           </div>

//           {/* Confirm Password Field */}
//           <div className="password-input-wrapper" style={{ position: "relative" }}>
//             <input
//               type={showConfirmPassword ? "text" : "password"}
//               name="confirmpassword"
//               placeholder="Confirm Password"
//               value={formData.confirmpassword}
//               onChange={handleChange}
//               required
//               style={{ paddingRight: "40px" }}
//             />
//             <span
//               onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//               className="eye-icon"
//               style={{
//                 position: "absolute",
//                 right: "10px",
//                 top: "50%",
//                 transform: "translateY(-50%)",
//                 cursor: "pointer",
//               }}
//             >
//               {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
//             </span>
//           </div>

//           {/* Password Rules */}
//           <div className="pwValidator" style={{ marginTop: "6px", marginBottom: "8px" }}>
//             {passwordChecks.map((e, i) => (
//               <h4
//                 key={i}
//                 style={{
//                   color: e.valid ? "green" : "red",
//                   fontFamily: "sans-serif",
//                   fontWeight: "300",
//                   fontSize: "12px",
//                 }}
//               >
//                 {e.valid ? "✓" : "✕"} {e.condition}
//               </h4>
//             ))}
//           </div>

//           <div
//             style={{
//               display: "flex",
//               flexDirection: "column",
//               gap: "12px",
//               marginTop: "12px",
//             }}
//           >
//             <button
//               type="submit"
//               disabled={loading}
//               className="auth-button"
//               style={{ ...buttonStyle, backgroundColor: "#28a745" }}
//             >
//               {loading ? "Signing up..." : "Sign Up"}
//             </button>
//             <button
//               type="button"
//               className="auth-button"
//               style={{
//                 ...buttonStyle,
//                 backgroundColor: "#f0f0f0",
//                 color: "#333",
//               }}
//               onClick={() => navigate("/")}
//             >
//               Return to Home
//             </button>
//           </div>

//           {error && <p style={{ color: "red", marginTop: "6px" }}>{error}</p>}
//           <p className="text-center" style={{ marginTop: "8px" }}>
//             Already have an account? <Link to="/login">Login</Link>
//           </p>
//         </form>
//       </div>
//       <ToastContainer
//         position="top-right"
//         autoClose={3000}
//         closeOnClick
//         pauseOnHover
//         draggable
//         theme="dark"
//         toastClassName="toast-body custom-toast-shadow"
//         bodyClassName="text-sm font-medium"
//       />
//     </div>
//   );
// };

// export default Signup;

import React from 'react';
import { SignUp } from '@clerk/clerk-react';

const Signup = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <SignUp
        routing="path"
        path="/signup"
        redirectUrl="/user/dashboard"
      />
    </div>
  );
};

export default Signup;
