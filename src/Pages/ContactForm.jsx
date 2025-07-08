import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiUser, FiMail, FiMessageCircle, FiCheckCircle } from 'react-icons/fi';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    // Add your API call or submission logic here
  };
  const isFilled = (value) => value.trim() !== '';
  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-7 w-full"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      {/* Name Field */}
      <motion.div className="relative" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
        <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-emerald-400 text-xl pointer-events-none" />
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="peer w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-[#23272f] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 placeholder-transparent"
          placeholder="Your Name"
          autoComplete="off"
        />
        <label
          htmlFor="name"
          className={`absolute left-10 px-1 bg-white dark:bg-[#23272f] transition-all duration-200 text-gray-500 dark:text-gray-400 pointer-events-none 
            ${isFilled(formData.name) ? '-top-3 text-xs text-emerald-600 dark:text-emerald-400' : 'top-4 text-base'}
            peer-focus:-top-3 peer-focus:text-xs peer-focus:text-emerald-600 dark:peer-focus:text-emerald-400 peer-focus:px-1`}
        >
          Your Name
        </label>
      </motion.div>
      {/* Email Field */}
      <motion.div className="relative" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
        <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-emerald-400 text-xl pointer-events-none" />
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="peer w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-[#23272f] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 placeholder-transparent"
          placeholder="Your Email"
          autoComplete="off"
        />
        <label
          htmlFor="email"
          className={`absolute left-10 px-1 bg-white dark:bg-[#23272f] transition-all duration-200 text-gray-500 dark:text-gray-400 pointer-events-none 
            ${isFilled(formData.email) ? '-top-3 text-xs text-emerald-600 dark:text-emerald-400' : 'top-4 text-base'}
            peer-focus:-top-3 peer-focus:text-xs peer-focus:text-emerald-600 dark:peer-focus:text-emerald-400 peer-focus:px-1`}
        >
          Your Email
        </label>
      </motion.div>
      {/* Message Field */}
      <motion.div className="relative" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
        <FiMessageCircle className="absolute left-3 top-4 text-emerald-400 text-xl pointer-events-none" />
        <textarea
          id="message"
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
          className="peer w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-[#23272f] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 placeholder-transparent resize-none"
          placeholder="Your Message"
        ></textarea>
        <label
          htmlFor="message"
          className={`absolute left-10 px-1 bg-white dark:bg-[#23272f] transition-all duration-200 text-gray-500 dark:text-gray-400 pointer-events-none 
            ${isFilled(formData.message) ? '-top-3 text-xs text-emerald-600 dark:text-emerald-400' : 'top-4 text-base'}
            peer-focus:-top-3 peer-focus:text-xs peer-focus:text-emerald-600 dark:peer-focus:text-emerald-400 peer-focus:px-1`}
        >
          Your Message
        </label>
      </motion.div>
      {/* Submit Button */}
      <motion.button
        type="submit"
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.98 }}
        className="w-full flex items-center justify-center gap-2 bg-emerald-600 dark:bg-emerald-500 text-white font-semibold py-3 px-4 rounded-lg shadow-md hover:bg-emerald-700 dark:hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all duration-300"
      >
        {submitted ? <FiCheckCircle className="text-xl" /> : null}
        {submitted ? 'Message Sent!' : 'Send Message'}
      </motion.button>
      {/* Success Message */}
      {submitted && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="flex items-center justify-center gap-2 text-emerald-600 dark:text-emerald-400 font-medium mt-2"
        >
          <FiCheckCircle className="text-xl" />
          Thank you! We have received your message.
        </motion.div>
      )}
    </motion.form>
  );
};

export default ContactForm;