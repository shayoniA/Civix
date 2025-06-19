import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
    // You can add API call or other submission logic
  };

  return (
    <div className="w-full">
      <div className="max-w-3xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-left text-sm font-medium text-muted-foreground mb-1">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-[#23272f] focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors duration-300"
              placeholder="John Doe"
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-left text-sm font-medium text-muted-foreground mb-1">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-[#23272f] focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors duration-300"
              placeholder="you@example.com"
              required
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-left text-sm font-medium text-muted-foreground mb-1">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-[#23272f] focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors duration-300"
              placeholder="How can we help you?"
              required
            ></textarea>
          </div>
          
          <button
            type="submit"
            className="w-full bg-emerald-600 text-white font-medium py-3 px-4 rounded-md hover:bg-emerald-700 transition-colors duration-300"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;