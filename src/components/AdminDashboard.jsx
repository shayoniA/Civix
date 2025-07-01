<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast ,ToastContainer} from 'react-toastify';
const AdminDashboard = () => {
  const navigate = useNavigate();
  const [issues, setIssues] = useState([]);

  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove token from localStorage
    toast.success("you have been logged out")
        setTimeout(() => {
        navigate('/login');
        },2000);
  }
    localStorage.removeItem('token');
    alert('You have been logged out.');
    navigate('/login');
  };

  // Fetch all reported issues
  const fetchIssues = React.useCallback(async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await fetch('http://localhost:5001/api/issues', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        throw new Error('Unauthorized or failed to fetch');
      }

      const data = await res.json();
      setIssues(data);
    } catch (error) {
      console.error('Error fetching issues:', error);
      alert('Failed to fetch issues. Please login again.');
      navigate('/login');
    }
  }, [navigate]);

  // Update issue status
  const handleStatusChange = async (id, status) => {
    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`http://localhost:5001/api/issues/${id}/status`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status }),
      });

      if (!res.ok) {
        throw new Error('Failed to update status');
      }

      // Refresh issue list
      fetchIssues();
    } catch (error) {
      console.error('Error updating status:', error);
      alert('Could not update status.');
    }
  };

  useEffect(() => {
    fetchIssues();
  }, [fetchIssues]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
=======
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
>>>>>>> 7c5900ba5b06a57c3e847c9543aeeb81e0ed4159
      <header className="flex justify-between items-center px-6 py-4 bg-emerald-500 text-white shadow-md">
        <h2 className="text-xl font-bold">Admin Dashboard</h2>
        <button
          onClick={handleLogout}
          className="bg-white text-emerald-600 px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition"
        >
          Logout
        </button>
      </header>

<<<<<<< HEAD
      {/* Issues Table */}
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
        <h3 className="text-lg font-semibold mb-4">Reported Issues</h3>

        {issues.length === 0 ? (
          <p>No issues found.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300 bg-white text-sm rounded-lg overflow-hidden shadow">
              <thead className="bg-gray-200 text-gray-700">
                <tr>
                  <th className="p-3">Title</th>
                  <th className="p-3">Description</th>
                  <th className="p-3">Phone</th>
                  <th className="p-3">Email</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Change Status</th>
                </tr>
              </thead>
              <tbody>
                {issues.map((issue) => (
                  <tr key={issue._id} className="border-t border-gray-200">
                    <td className="p-3">{issue.title}</td>
                    <td className="p-3">{issue.description}</td>
                    <td className="p-3">{issue.phone}</td>
                    <td className="p-3">{issue.email}</td>
                    <td className="p-3">{issue.status || 'Pending'}</td>
                    <td className="p-3">
                      <select
                        value={issue.status || 'Pending'}
                        onChange={(e) => handleStatusChange(issue._id, e.target.value)}
                        className="border border-gray-300 rounded px-2 py-1"
                      >
                        <option>Pending</option>
                        <option>In Progress</option>
                        <option>Resolved</option>
                        <option>Rejected</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
=======
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
>>>>>>> 7c5900ba5b06a57c3e847c9543aeeb81e0ed4159
      </main>
    </div>
  );
};

export default AdminDashboard;
