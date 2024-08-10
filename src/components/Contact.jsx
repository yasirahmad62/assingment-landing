import React, { useState, useRef } from 'react';
import './css/Contact.css';

function Contact() {
  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    country: '',
    message: '',
    consent: false,
  });

  const [errors, setErrors] = useState({});
  const formRef = useRef(null);

  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // Validate form inputs
  const validateForm = () => {
    let formErrors = {};
    if (!formData.firstName) formErrors.firstName = 'First name is required';
    if (!formData.lastName) formErrors.lastName = 'Last name is required';
    if (!formData.email) formErrors.email = 'Email is required';
    if (!formData.phone) formErrors.phone = 'Phone number is required';
    if (!formData.company) formErrors.company = 'Company name is required';
    if (!formData.country) formErrors.country = 'Country selection is required';
    if (!formData.message) formErrors.message = 'Message is required';
    if (!formData.consent) formErrors.consent = 'Consent is required';

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Submit the form
      alert('Form submitted successfully');
      // Reset form fields
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        country: '',
        message: '',
        consent: false,
      });
      setErrors({});
    }
  };

  // Smooth scroll to contact form section
  const scrollToForm = () => {
    formRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="contact">
      <div className="contact-content">
        <h2>Contacts</h2>
        <p>You need a partner. We are here to help. Book your free consultation now.</p>
        <button className="contact-button" onClick={scrollToForm}>GET IN TOUCH</button>
      </div>
      <div className='contact-wrapper' ref={formRef}>
        <div className="office-locations">
          <h2>Office Locations</h2>
          <div className="location-grid">
            <div className="location">
              <h3>Canada</h3>
              <p><strong>Toronto, ON</strong><br />
                Royal Bank Plaza, South Tower, <br />
                200 Bay Street, Suite 1401 <br />
                Toronto, ON, M5J 2J2</p>

              <p><strong>Burnaby, BC</strong><br />
                6060 Silver Dr. <br />
                Burnaby, BC <br />
                V5H 0H5</p>
            </div>
            <div className="location">
              <h3>&nbsp;</h3>
              <p><strong>Calgary, AB</strong><br />
                700 2 Street Southwest, <br />
                Floor 19 <br />
                Calgary, AB, T2P 2W2</p>

              <p><strong>Montreal, QC</strong><br />
                3 Place Ville Marie, Suite 400 <br />
                Montreal, QC <br />
                H3B 2E3</p>
            </div>
            <div className="location">
              <h3>&nbsp;</h3>
              <p><strong>Markham, ON</strong><br />
                175 Commerce Valley Dr W, <br />
                Suite 301, <br />
                Markham, ON, L3T 7P6</p>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <h2>Let’s Chat!</h2>
          <p>Discover how we can help you derive the most value from your data. Book a consultation with a solution expert now.</p>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <input 
                type="text" 
                name="firstName" 
                placeholder="First name*" 
                value={formData.firstName} 
                onChange={handleChange}
                className={errors.firstName ? 'error' : ''}
                required />
              <input 
                type="text" 
                name="lastName" 
                placeholder="Last name*" 
                value={formData.lastName} 
                onChange={handleChange}
                className={errors.lastName ? 'error' : ''}
                required />
            </div>
            <div className="form-row">
              <input 
                type="email" 
                name="email" 
                placeholder="Business email*" 
                value={formData.email} 
                onChange={handleChange}
                className={errors.email ? 'error' : ''}
                required />
              <input 
                type="tel" 
                name="phone" 
                placeholder="Phone number*" 
                value={formData.phone} 
                onChange={handleChange}
                className={errors.phone ? 'error' : ''}
                required />
            </div>
            <div className="form-row">
              <input 
                type="text" 
                name="company" 
                placeholder="Company*" 
                value={formData.company} 
                onChange={handleChange}
                className={errors.company ? 'error' : ''}
                required />
              <select 
                name="country" 
                value={formData.country} 
                onChange={handleChange}
                className={errors.country ? 'error' : ''}
                required>
                <option value="">Select Country</option>
                <option value="Canada">Canada</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
              </select>
            </div>
            <div className="form-row">
              <textarea 
                name="message" 
                placeholder="Message*" 
                value={formData.message} 
                onChange={handleChange}
                className={errors.message ? 'error' : ''}
                required></textarea>
            </div>
            <div className="form-row checkbox-row">
              <input 
                type="checkbox" 
                id="consent" 
                name="consent" 
                checked={formData.consent} 
                onChange={handleChange}
                className={errors.consent ? 'error' : ''}
                required />
              <label htmlFor="consent">I consent to the processing of my personal data for the purposes of receiving electronic messages and marketing communications as outlined in the Privacy Policy.</label>
            </div>
            <button type="submit" className="submit-button">SUBMIT NOW</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
