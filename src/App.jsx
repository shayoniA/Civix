import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { SignIn, SignUp } from '@clerk/clerk-react';

import Home from './Home';
import Login from './components/Login'; // Optional if using Clerk's SignIn
import Signup from './components/Signup'; // Optional if using Clerk's SignUp
import PrivateRoute from './components/PrivateRoute';
import AdminDashboard from './components/AdminDashboard';
import Error404 from './components/Error404';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Pages
import About from './Pages/About';
import Privacy from './Pages/Privacy';
import Terms from './Pages/Terms';
import Contact from './Pages/Contact';
import ReportIssue from './Pages/ReportIssue';
import ServerError from './components/ServerError';
import DownloadAndroid from './Pages/DownloadAndroid';
import DownloadIOS from './Pages/DownloadIOS';

const App = () => {
  return (
    <>
      <ScrollToTop />

      <Routes>
        {/* Clerk Auth Routes with wildcard */}
        <Route
          path="/sign-in/*"
          element={<SignIn routing="path" path="/sign-in" redirectUrl="/home" />}
        />
        <Route
          path="/signup/*"
          element={<SignUp routing="path" path="/signup" redirectUrl="/home" />}
        />

        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/contact" element={<Contact />} />
        <Route
  path="/report-issue"
  element={
    <PrivateRoute allowedRoles={['user', 'admin']}>
      <ReportIssue />
    </PrivateRoute>
  }
/>
        <Route path="/download-android" element={<DownloadAndroid />} />
        <Route path="/download-ios" element={<DownloadIOS />} />

        {/* Optional: If you're still using custom login/signup */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected Routes */}
        <Route
          path="/admin/dashboard"
          element={
            <PrivateRoute allowedRoles={['admin']}>
              <AdminDashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/home"
          element={
            <PrivateRoute allowedRoles={['user', 'admin']}>
              <Home />
            </PrivateRoute>
          }
        />
        <Route path="/500" element={<ServerError />} />
        <Route path="*" element={<Error404 />} />
      </Routes>

      {/* Optional: Footer */}
      {/* <Footer /> */}
    </>
  );
};

export default App;
