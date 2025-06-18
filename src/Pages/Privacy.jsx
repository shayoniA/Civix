import React from 'react';
import './Privacy.css';

function Privacy() {
  return (
    <div className="privacy-container">
      <h1 className="privacy-title">Privacy Policy</h1>
      <p className="privacy-text">
        Your privacy is important to us. This Privacy Policy outlines how Civix collects, uses, and protects your information when you use our services.
      </p>

      <h2 className="privacy-subtitle">Information Collection</h2>
      <p className="privacy-text">
        We collect information you provide directly, such as when you report issues or contact support. We may also collect location data to better route civic complaints.
      </p>

      <h2 className="privacy-subtitle">Use of Information</h2>
      <p className="privacy-text">
        The collected information is used to improve our service, route reports to appropriate authorities, and provide users with updates and support.
      </p>

      <h2 className="privacy-subtitle">Data Security</h2>
      <p className="privacy-text">
        We implement security measures to protect your data. However, no method of transmission over the internet is 100% secure.
      </p>

      <h2 className="privacy-subtitle">Third-Party Services</h2>
      <p className="privacy-text">
        We do not sell your information to third parties. However, we may share necessary data with trusted partners to ensure services function effectively.
      </p>

      <h2 className="privacy-subtitle">Changes to This Policy</h2>
      <p className="privacy-text">
        We may update this policy periodically. Continued use of our services constitutes your agreement to these changes.
      </p>

      <p className="privacy-updated">Last updated: June 2025</p>
    </div>
  );
}

export default Privacy;