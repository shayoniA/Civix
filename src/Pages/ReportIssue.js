import React, { useState } from 'react';

export default function ReportIssue() {
  const[phone, setPhone] = useState('')
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('phone', phone);
    if (file) formData.append('file', file);

    try {
      const res = await fetch('http://localhost:5001/api/report', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();
      alert(data.message);
    } catch (err) {
      console.error('Submit error:', err);
      alert('Failed to submit issue.');
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Report an Issue</h1>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
           type="text"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Issue Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <textarea
          placeholder="Describe the issue..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border p-2 rounded"
        ></textarea>
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          className="block"
        />
        <button
          type="submit"
          className="bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
