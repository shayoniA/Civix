import React from 'react';
import './Terms.css';

function Terms() {
  return (
    <div className="terms-container">
      <h1 className="terms-title">Terms of Service</h1>
      <p className="terms-text">
        These Terms of Service govern your use of Civix. By accessing or using our platform, you agree to these terms.
      </p>

      <h2 className="terms-subtitle">Use of Service</h2>
      <p className="terms-text">
        You agree to use Civix for lawful purposes only and not to misuse or interfere with the platform’s functionality.
      </p>

      <h2 className="terms-subtitle">User Responsibilities</h2>
      <p className="terms-text">
        Users are responsible for the accuracy of the information they submit and must avoid submitting false or misleading reports.
      </p>

      <h2 className="terms-subtitle">Platform Rights</h2>
      <p className="terms-text">
        We reserve the right to modify, suspend, or discontinue the platform at any time without prior notice.
      </p>

      <h2 className="terms-subtitle">Termination</h2>
      <p className="terms-text">
        We may suspend or terminate access if you violate these terms or engage in prohibited activities.
      </p>

      <h2 className="terms-subtitle">Updates to Terms</h2>
      <p className="terms-text">
        We may revise these terms periodically. Continued use of Civix constitutes your acceptance of any changes.
      </p>

      <p className="terms-updated">Last updated: June 2025</p>
    </div>
  );
}

export default Terms;