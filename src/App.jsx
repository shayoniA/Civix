import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './Home';
import Login from './components/Login';
import Signup from './components/Signup';
import PrivateRoute from './components/PrivateRoute';
import AdminDashboard from './components/AdminDashboard';
import Error404 from './components/Error404';
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import ScrollToTop from './components/ScrollToTop';
import About from "./Pages/About";
import Privacy from "./Pages/Privacy";
import Terms from "./Pages/Terms";
import Contact from "./Pages/Contact";
import ReportIssue from "./Pages/ReportIssue";
import ServerError from "./components/ServerError";
import DownloadAndroid from './Pages/DownloadAndroid';
import DownloadIOS from './Pages/DownloadIOS';
import NewIssue from './Pages/NewIssue';
import IssueDetail from './Pages/IssueDetail';

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Toaster
        position="top-right"
        toastOptions={{
          className: '!bg-white dark:!bg-gray-800 !text-gray-900 dark:!text-white !border !border-gray-200 dark:!border-gray-700',
          duration: 4000,
          success: {
            iconTheme: {
              primary: '#10B981',
              secondary: 'white',
            },
          },
          error: {
            iconTheme: {
              primary: '#EF4444',
              secondary: 'white',
            },
          },
        }}
      />
      
      <Navbar />
      
      <main className="container mx-auto p-4">
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
          <Route path="/download-android" element={<DownloadAndroid />} />
          <Route path="/download-ios" element={<DownloadIOS />} />
          <Route path="/issues/new" element={<NewIssue />} />
          <Route path="/issues/:id" element={<IssueDetail />} />
          <Route path="/500" element={<ServerError />} />

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
            path="/home" 
            element={
              <PrivateRoute allowedRoles={['user', 'admin']}>
                <Home />
              </PrivateRoute>
            } 
          />

          {/* 404 Catch-all */}
          <Route path="*" element={<Error404 />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
};

export default App;