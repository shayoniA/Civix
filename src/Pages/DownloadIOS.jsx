import React, { useState } from 'react';
import './DownloadIOS.css';

const DownloadIOS = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "Is the Civix app free to use on iOS?",
      answer: "Yes, Civix is completely free for all iPhone users as well."
    },
    {
      question: "When will it be available on the App Store?",
      answer: "We are preparing for release and expect to launch on the App Store very soon."
    },
    {
      question: "Will it work on all iPhones?",
      answer: "Civix supports iOS 13 and above, covering all modern iPhones."
    },
    {
      question: "Does it support iPads?",
      answer: "Yes, Civix will run on both iPhones and iPads for your convenience."
    },
    {
      question: "Is my data secure?",
      answer: "Absolutely. Civix for iOS follows strict Apple security and privacy standards."
    }
  ];

  const features = [
    { title: "Instant Civic Alerts", subtitle: "Real-time updates for local policies, disruptions, and public services." },
    { title: "Location-Specific Info", subtitle: "Civic updates curated for your area using Apple location services." },
    { title: "Report Issues", subtitle: "Easily submit issues to authorities directly from your iOS device." },
    { title: "Community Insights", subtitle: "Vote in polls, complete surveys, and view local statistics." },
    { title: "Privacy First", subtitle: "Your iCloud data and preferences are safe and private." }
  ];

  return (
    <div className="download-container">
      <header className="hero">
        <h1>Civix for iOS</h1>
        <p className="subtitle">Empower your civic voice with Civix on iPhone and iPad.</p>
        <div className="buttons">
          <button className="primary" disabled>Coming Soon on App Store</button>
          <button className="secondary">Get Notified</button>
        </div>
        <p className="note">📱 Launching soon on the Apple App Store</p>
      </header>

      <section className="features">
        <h2>Smart Features</h2>
        <div className="feature-grid">
          {features.map((f, i) => (
            <div key={i} className="feature-card">
              <h3>{f.title}</h3>
              <p>{f.subtitle}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="faq">
        <h2>Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${openFAQ === index ? 'open' : ''}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">{faq.question}</div>
            {openFAQ === index && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))}
      </section>

      <section className="cta">
        <h2>Be First to Download Civix on iOS</h2>
        <p>Sign up and get notified the moment Civix is available on the App Store.</p>
        <div className="buttons">
          <button className="primary">Notify Me</button>
          <button className="secondary">Explore Features</button>
        </div>
      </section>

      <footer className="footer">
        <h3>Civix</h3>
        <p className="footer-note">© 2025 Civix</p>
      </footer>
    </div>
  );
};

export default DownloadIOS;