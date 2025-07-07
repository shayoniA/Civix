
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

      <Route path="/500" element={<ServerError />} />

      </Routes>

      {/* Footer */}
     
    </BrowserRouter>
  );
};

export default App;
// src/App.jsx
import { Toaster } from 'react-hot-toast';
import { Routes, Route } from 'react-router-dom';
// Import your other components...

function App() {
  return (
    <>
      {/* Toast Provider (should be near root) */}
      <Toaster
        position="top-right"
        toastOptions={{
          className: '!bg-white dark:!bg-gray-800 !text-gray-900 dark:!text-white !border !border-gray-200 dark:!border-gray-700',
          duration: 4000,
          success: {
            iconTheme: {
              primary: '#10B981', // Emerald 500
              secondary: 'white',
            },
          },
          error: {
            iconTheme: {
              primary: '#EF4444', // Red 500
              secondary: 'white',
            },
          },
        }}
      />

      {/* Your existing layout */}
      <Navbar />
      
      <main className="container mx-auto p-4">
        <Routes>
          <Route path="/issues/new" element={<NewIssue />} />
          <Route path="/issues/:id" element={<IssueDetail />} />
          {/* Other routes... */}
        </Routes>
      </main>

      <Footer />
    </>
  );
}