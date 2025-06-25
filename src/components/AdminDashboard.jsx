import React from 'react'
import { useNavigate } from 'react-router-dom'
import { toast ,ToastContainer} from 'react-toastify';
const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove token from localStorage
    toast.success("you have been logged out")
        setTimeout(() => {
        navigate('/login');
        },2000);
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top bar with Logout button */}
      <header className="flex justify-between items-center px-6 py-4 bg-emerald-500 text-white shadow-md">
        <h2 className="text-xl font-bold">Admin Dashboard</h2>
        <button
          onClick={handleLogout}
          className="bg-white text-emerald-600 px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition"
        >
          Logout
        </button>
      </header>

      {/* Dashboard Content */}
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
  )
}

export default AdminDashboard;
