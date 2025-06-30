
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Home';
import Login from './components/Login';
import Signup from './components/Signup';
import PrivateRoute from './components/PrivateRoute';
import AdminDashboard from './components/AdminDashboard';
import Error404 from './components/Error404';
import Footer from "./components/Footer";
import ScrollToTop from './components/ScrollToTop';

// Newly added pages
import About from "./Pages/About";
import Privacy from "./Pages/Privacy";
import Terms from "./Pages/Terms";
import Contact from "./Pages/Contact";
import ReportIssue from "./Pages/ReportIssue"
import ServerError from "./components/ServerError";
import DownloadAndroid from './Pages/DownloadAndroid';
import DownloadIOS from './Pages/DownloadIOS';
import UserDashboard from './Pages/UserDashboard '
import CommunityVotingPage from './Pages/CommunityVotingPage';
import Profile from './Pages/Profile';
import Resources from './Pages/Resources';
import MyComplaints from './Pages/MyComplaints'


const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/report-issue" element={<ReportIssue />} />        
        <Route path="*" element={<Error404 />} />
        <Route path='/download-android' element={<DownloadAndroid/>}/>
        <Route path='/download-ios' element={<DownloadIOS/>}/>
        <Route path="/community-voting" element={<CommunityVotingPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/complaints" element={<MyComplaints />} />

        {/* Protected routes */}
        <Route 
          path="/admin/dashboard" 
          element={
            <PrivateRoute allowedRoles={['admin']}>
              <AdminDashboard />
            </PrivateRoute>
          } 
        />
        <Route 
          path="/user/dashboard" 
          element={
            <PrivateRoute allowedRoles={['user', 'admin']}>
              <UserDashboard />
            </PrivateRoute>
          } 
        />

      <Route path="/500" element={<ServerError />} />

      </Routes>

      {/* Footer */}
     
    </BrowserRouter>
  );
};

export default App;
