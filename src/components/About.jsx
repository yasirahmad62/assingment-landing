import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faBolt, faChartLine, faTools, faShareAlt, faTrophy, faBullseye, faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import './css/About.css';
import heroImage from '../assets/images/hero-bg.jpg'

function About() {
  return (
    <div className="about">
      <div className="hero-container">
        <img src={heroImage} alt="About Us" className="hero-image" />
        <div className="hero-overlay">
          <h1>About Us</h1>
          <p>Transforming enterprises through the power of data.</p>
          <button className="cta-button">LET'S TALK</button>
        </div>
      </div>
      <div className="about-content">
        <h2>Maximize the Value of Your Data</h2>
        <p>
          Enhancing customer satisfaction, operational efficiency, and business growth begins with leveraging data. However, realizing the full potential of your data demands reliable and scalable infrastructure. For over two decades, we've been intensely focused on data solutions and the infrastructure that supports them. Our expertise in data and AI empowers business and IT leaders with insights they can trust—helping them make better, data-driven decisions every day.
        </p>
        <p>
          Our robust technical capabilities, paired with our cutting-edge data management platform, enable us to deliver comprehensive solutions in Artificial Intelligence, Data Analytics, Cloud, Digital Transformation, and Governance. We have a proven track record of assisting organizations of all sizes—from startups to Fortune 1000 companies—in achieving their transformation objectives.
        </p>
        <p>
          Data is your strategic advantage. Let us help you harness it.
        </p>
      </div>

      <div className="about-content">
        <h2>Your Data Security is Our Priority</h2>
        <p>
          Information security is a cornerstone of our operations. We prioritize protecting your data by implementing rigorous safeguards, including advanced processes, cutting-edge tools, and reliable infrastructure, ensuring your information remains secure at all times.
        </p>
      </div>

      <div className="why-partner">
        <h2>Why Partner with Us?</h2>
        <p>We transform your enterprise applications so you can better leverage data, accelerate innovation, improve operational excellence, and create unforgettable customer experiences.</p>
        <div className="why-partner-cards">
          <div className="partner-card">
            <FontAwesomeIcon icon={faThumbsUp} className="icon" />
            <h3>Top Talent</h3>
            <p>We hire only the best and the brightest and continuously invest in their training.</p>
          </div>
          <div className="partner-card">
            <FontAwesomeIcon icon={faBolt} className="icon" />
            <h3>Strategy-Focused</h3>
            <p>We develop solutions that meet customers’ current and future business needs.</p>
          </div>
          <div className="partner-card">
            <FontAwesomeIcon icon={faChartLine} className="icon" />
            <h3>Ongoing Value</h3>
            <p>We deliver long-term value to our customers with measurable ROI.</p>
          </div>
          <div className="partner-card">
            <FontAwesomeIcon icon={faTools} className="icon" />
            <h3>End-to-End Services</h3>
            <p>We provide data services from inception through maintenance.</p>
          </div>
          <div className="partner-card">
            <FontAwesomeIcon icon={faShareAlt} className="icon" />
            <h3>Agile Services</h3>
            <p>Our agile work structures allow us to scale our services up or down on demand.</p>
          </div>
          <div className="partner-card">
            <FontAwesomeIcon icon={faTrophy} className="icon" />
            <h3>Execution Excellence</h3>
            <p>We consider a project to be successful when it is delivered on time, on budget, and within scope.</p>
          </div>
          <div className="partner-card">
            <FontAwesomeIcon icon={faBullseye} className="icon" />
            <h3>Unbiased Solutions</h3>
            <p>We focus on your goals—not pushing a specific technology or approach.</p>
          </div>
          <div className="partner-card">
            <FontAwesomeIcon icon={faShieldAlt} className="icon" />
            <h3>Data Security</h3>
            <p>We take care of your data by ensuring it’s correct, complete, and compliant.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
