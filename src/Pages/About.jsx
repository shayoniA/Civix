import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './About.css';

function About() {
  const [isDarkMode, setIsDarkMode] = useState(
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => setIsDarkMode(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 70, rotate: -5 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: {
        delay: i * 0.3,
        type: 'spring',
        stiffness: 130,
        damping: 15,
      },
    }),
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
      transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
      className={`about-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}
    >
      <motion.header
        variants={sectionVariants}
        className="header-section"
      >
        <motion.h1
          className="heading1"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 120 }}
        >
          Report Local Issues.
        </motion.h1>
        <motion.h2
          className="heading2"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8, type: 'spring', stiffness: 120 }}
        >
          Make Your City Better.
        </motion.h2>
        <motion.p
          className="description"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8, type: 'spring', stiffness: 120 }}
        >
          Civix helps citizens report and track local civic issues like potholes, broken lights, and garbage collection problems.
        </motion.p>
      </motion.header>

      <motion.section
        className="features-section"
        variants={sectionVariants}
      >
        {[
          {
            title: 'Easy Reporting',
            text: 'Quickly log issues with a few taps and notify the right authorities.',
          },
          {
            title: 'Track Progress',
            text: 'Stay updated with real-time progress on your complaints.',
          },
          {
            title: 'Community Driven',
            text: 'Engage and collaborate with your neighborhood to drive change.',
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={cardVariants}
            whileHover={{ scale: 1.08, rotate: 2, boxShadow: '0 15px 30px rgba(0,0,0,0.25)' }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 350 }}
            className="feature-card"
          >
            <h3 className="cardTitle">{item.title}</h3>
            <p className="cardText">{item.text}</p>
          </motion.div>
        ))}
      </motion.section>

      <motion.section
        className="why-section"
        variants={sectionVariants}
        transition={{ delay: 1.2, duration: 0.8}}
      >
        <h2 className="heading2">Why Use Civix?</h2>
        <p className="description">
          Civix empowers citizens by simplifying the process to voice concerns and foster positive change in communities. 
          It connects the public with civic authorities for enhanced governance and transparency.
        </p>
        <h2 className="heading2">How It Works</h2>
        <ol className="steps">
          <li>
            <strong>Step 1:</strong> Log in via the mobile app and describe your issue with a location and photo if possible.
          </li>
          <li>
            <strong>Step 2:</strong> The Civix app routes your report to the relevant department.
          </li>
          <li>
            <strong>Step 3:</strong> Monitor updates and resolution status in real-time.
          </li>
        </ol>
      </motion.section>
    </motion.div>
  );
}

export default About;