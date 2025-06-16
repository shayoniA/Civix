import React from 'react';
import './About.css';

function About() {
  return (
    <div className="container">
      <h1 className="heading1">Report Local Issues.</h1>
      <h2 className="heading2">Make Your City Better.</h2>
      <p className="description">
        Civix helps citizens report and track local civic issues like potholes, broken lights, and garbage collection problems.
      </p>
      <div className="grid">
        <div className="card">
          <h3 className="cardTitle">Easy Reporting</h3>
          <p className="cardText">Quickly log issues with a few taps and let the right authorities know.</p>
        </div>
        <div className="card">
          <h3 className="cardTitle">Track Progress</h3>
          <p className="cardText">Stay updated with the progress of your complaints in real-time.</p>
        </div>
        <div className="card">
          <h3 className="cardTitle">Community Driven</h3>
          <p className="cardText">Empower your neighborhood by engaging and collaborating with others.</p>
        </div>
      </div>
      <div className="about-why">
        <h2 className="heading2">Why Use Civix?</h2>
        <p className="description">
          Civix empowers citizens by making it easier to voice concerns and drive positive change in their communities. 
          It bridges the gap between the public and civic authorities for better governance and transparency.
        </p>
        <h2 className="heading2">How It Works</h2>
        <ol className="steps">
          <li><strong>Step 1:</strong> Log in through the mobile app and describe your issue with a location and photo if possible.</li>
          <li><strong>Step 2:</strong> The Civix app forwards your report to the appropriate department.</li>
          <li><strong>Step 3:</strong> Track updates and resolution status in real-time through the app.</li>
        </ol>
      </div>
    </div>
  );
}

export default About
