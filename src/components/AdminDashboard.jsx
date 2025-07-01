import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser, useClerk } from '@clerk/clerk-react';
import { toast, ToastContainer } from 'react-toastify';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { signOut } = useClerk();
  const { user, isLoaded, isSignedIn } = useUser();

  useEffect(() => {
    if (isLoaded && (!isSignedIn || user?.publicMetadata?.role !== 'admin')) {
      toast.error('Unauthorized access');
      navigate('/unauthorized');
    }
  }, [isLoaded, isSignedIn, user, navigate]);

  const handleLogout = async () => {
    await signOut();
    toast.success('You have been logged out');
  };

  if (!isLoaded) return null; // or a loading spinner

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="flex justify-between items-center px-6 py-4 bg-emerald-500 text-white shadow-md">
        <h2 className="text-xl font-bold">Admin Dashboard</h2>
        <button
          onClick={handleLogout}
          className="bg-white text-emerald-600 px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition"
        >
          Logout
        </button>
      </header>

      <main className="p-6">
        <p>Welcome, Admin! You have access to admin controls.</p>
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
      </main>
    </div>
  );
};

export default AdminDashboard;
