import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [issues, setIssues] = useState([]); // Holds all reported issues

  //  Handles admin logout
  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove login token from localStorage
    alert('You have been logged out.');
    navigate('/login'); // Redirect to login page
  };

  // Fetch all reported issues from backend
  const fetchIssues = async () => {
    try {
      const res = await fetch('http://localhost:5001/api/issues'); // Update this URL if deployed
      const data = await res.json();
      setIssues(data); // Update state with fetched issues
    } catch (error) {
      console.error('Error fetching issues:', error);
    }
  };

  // Fetch issues on component mount
  useEffect(() => {
    fetchIssues();
  }, []);

  //  Update the status of an issue and refresh the list
  const handleStatusChange = async (id, newStatus) => {
    try {
      await fetch(`http://localhost:5001/api/issues/${id}/status`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ newStatus }),
      });

      fetchIssues(); // Refresh issue list after update
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/*  Top navigation bar */}
      <header className="flex justify-between items-center px-6 py-4 bg-emerald-500 text-white shadow-md">
        <h2 className="text-xl font-bold">Admin Dashboard</h2>
        <button
          onClick={handleLogout}
          className="bg-white text-emerald-600 px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition"
        >
          Logout
        </button>
      </header>

      {/*  Issue list section */}
      <main className="p-6">
        <h3 className="text-lg font-semibold mb-4">Reported Issues</h3>

        {issues.length === 0 ? (
          //  No issues found message
          <p>No issues found.</p>
        ) : (
          //  Issues Table
          <table className="w-full text-left border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-2">Title</th>
                <th className="p-2">Description</th>
                <th className="p-2">Phone</th>
                <th className="p-2">Email</th>
                <th className="p-2">Status</th>
                <th className="p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {issues.map((issue) => (
                <tr key={issue._id} className="border-t border-gray-300">
                  <td className="p-2">{issue.title}</td>
                  <td className="p-2">{issue.description}</td>
                  <td className="p-2">{issue.phone}</td>
                  <td className="p-2">{issue.email}</td>
                  <td className="p-2">{issue.status}</td>

                  {/* Status dropdown for each issue */}
                  <td className="p-2">
                    <select
                      value={issue.status}
                      onChange={(e) => handleStatusChange(issue._id, e.target.value)}
                      className="border p-1 rounded"
                    >
                      <option value="Pending">Pending</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Resolved">Resolved</option>
                      <option value="Rejected">Rejected</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;
