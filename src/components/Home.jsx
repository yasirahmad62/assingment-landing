import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faGlobe, faHandshake } from '@fortawesome/free-solid-svg-icons';
import './css/Home.css';
import testimonialImage from "../assets/images/random.jpg"

function Home() {
  return (
    <div className="home">
      <h2>Transforming Data Into Insights</h2>
      <p>Your Data, Analytics, and Cloud Computing Partner.</p>
      <p>Enabling businesses to extract value through data and analytic solutions.</p>

      <section className="what-we-do">
        <h3>What We Do</h3>
        <p>
          For more than 20 years, we’ve been hyper-focused on data, analytics, and the technology solutions to support them.
          Our data and AI expertise helps business and IT leaders provide trusted insights to every team member—so they can make better decisions every day.
        </p>
        <div className="services-section">
          <div className="service-card">
            <FontAwesomeIcon icon={faTruck} className="icon" />
            <h4>Services</h4>
            <p>
              We help our customers establish common frameworks, enforce best practices, speed up innovation, and streamline process handovers for round-the-clock global coverage by our delivery hubs.
            </p>
          </div>
          <div className="service-card">
            <FontAwesomeIcon icon={faGlobe} className="icon" />
            <h4>Industries</h4>
            <p>
              We help global and local organizations solve complex challenges and drive more value from their data. Leverage our expertise in your industry to optimize your operations and improve your customer experience.
            </p>
          </div>
          <div className="service-card">
            <FontAwesomeIcon icon={faHandshake} className="icon" />
            <h4>Partnerships</h4>
            <p>
              Our expertise lies in helping our clients leverage their data to extract the value they need. We appreciate that no two organizations have the exact same requirements, and our experts are well-versed with a variety of technical platforms and solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="partners">
        <h3>When you need a partner, we are there to help.</h3>
        <p>
          We work with the world’s most respected technology companies to deliver award-winning services and solutions.
        </p>
        <button className="browse-button">BROWSE OUR PARTNER PLATFORMS</button>
        <div className="partners-logos">
          <div className="partner-logo">
            <img src="https://adastracorp.com/wp-content/uploads/2023/03/adastra-gold-microsoft-partner-350-350.png" alt="Microsoft Partner" />
          </div>
          <div className="partner-logo">
            <img src="https://adastracorp.com/wp-content/uploads/2023/03/aws-partner-advanced-tier-services-badge-350-350.png" alt="AWS Partner" />
          </div>
          <div className="partner-logo">
            <img src="https://adastracorp.com/wp-content/uploads/2023/03/google-cloud-partner-badge-350-350.png" alt="Google Cloud Partner" />
          </div>
        </div>
      </section>

      <section className="testimonial">
        <div className="testimonial-content">
          <img src={testimonialImage} alt="Ahmad Yasir" className="testimonial-image" />
          <blockquote>
            “Adastra helped us take a broader perspective around our analytics platform. Their team of experts established and implemented a future-proof architecture that enables us to scale our Power BI platform across all Magna divisions globally.”
          </blockquote>
          <p className="testimonial-author">Ahmad Yasir</p>
          <p className="testimonial-position">Director, B2B & Solutions, Magna Global IT</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
