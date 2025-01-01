'use client'
import { useState } from 'react';
import styles from './QuoteForm.module.css';

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    projectType: '',
    budgetRange: '',
    projectDescription: '',
    agreeToTerms: false
  });

  function handleSubmit(e)  {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section id='quoteform' className={styles.quoteContainer}>
      <h1>Get a Free Quote</h1>
      <p>Share your project details with us, and we'll provide you with a comprehensive proposal</p>
      
      <form  className={styles.form}>
        <div className={styles.formGrid}>
          <div className={styles.formGroup}>
            <label>Full Name *</label>
            <input
              type="text"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={(e) => setFormData({...formData, fullName: e.target.value})}
              required
            />
          </div>
          
          <div className={styles.formGroup}>
            <label>Company Name</label>
            <input
              type="text"
              placeholder="Enter your company name"
              value={formData.companyName}
              onChange={(e) => setFormData({...formData, companyName: e.target.value})}
            />
          </div>

          <div className={styles.formGroup}>
            <label>Email Address *</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label>Phone Number *</label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label>Project Type *</label>
            <select
              value={formData.projectType}
              onChange={(e) => setFormData({...formData, projectType: e.target.value})}
              required
            >
              <option value="">Select project type</option>
              <option value="web">Web Development</option>
              <option value="mobile">Mobile Development</option>
              <option value="cloud">Cloud Solutions</option>
              <option value="enterprise">Enterprise Software</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label>Budget Range *</label>
            <select
              value={formData.budgetRange}
              onChange={(e) => setFormData({...formData, budgetRange: e.target.value})}
              required
            >
              <option value="">Select budget range</option>
              <option value="small">$5,000 - $10,000</option>
              <option value="medium">$10,000 - $25,000</option>
              <option value="large">$25,000+</option>
            </select>
          </div>
        </div>

        <div className={styles.formGroup}>
          <label>Project Description *</label>
          <textarea
            placeholder="Please describe your project requirements, goals, and timeline..."
            value={formData.projectDescription}
            onChange={(e) => setFormData({...formData, projectDescription: e.target.value})}
            required
            rows={5}
          />
        </div>

        <div className={styles.terms}>
          <input
            type="checkbox"
            checked={formData.agreeToTerms}
            onChange={(e) => setFormData({...formData, agreeToTerms: e.target.checked})}
            required
          />
          <span>
            I agree to the <a href="#">Terms and Conditions</a> and <a href="#">Privacy Policy</a>
          </span>
        </div>

        <button type="submit" className={styles.submitButton} onClick={(e)=>{handleSubmit(e)}}>
          Submit Quote Request <span>→</span>
        </button>
      </form>
    </section>
  );
}