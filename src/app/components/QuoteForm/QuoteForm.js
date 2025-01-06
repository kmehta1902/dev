'use client'
import { useState } from 'react';
import styles from './QuoteForm.module.css';

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    services: {
      webDevelopment: false,
      mobileAppDevelopment: false,
      aiMlSolutions: false,
      cloudServices: false,
      uiUxDesign: false,
      itConsulting: false
    },
    projectBudget: '',
    projectTimeline: '',
    projectDescription: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };


  return (
    <section id='quoteform' className={styles.quoteContainer}>
      <h1 className={styles.title}>Get a Free Quote</h1>
      <p className={styles.subbtitle}>Share your project details with us, and we'll provide you with a comprehensive proposal</p>
      <div></div>
      <div className={styles.formContainer}>
      <form onSubmit={handleSubmit} className={styles.formSection}>
        {/* Project Details Section */}
        <div>
          <h2 className={styles.sectionTitle}>Project Details</h2>
          <div className={styles.gridContainer}>
            <div>
              <label className={styles.formField}>Full Name *</label>
              <input
                type="text"
                placeholder="John Doe"
                className={styles.input}
                value={formData.fullName}
                onChange={(e) => setFormData({...formData, fullName: e.target.value})}
              />
            </div>
            <div>
              <label className={styles.formField}>Company Name</label>
              <input
                type="text"
                placeholder="Your Company"
                className={styles.input}
                value={formData.companyName}
                onChange={(e) => setFormData({...formData, companyName: e.target.value})}
              />
            </div>
            <div>
              <label className={styles.formField}>Email Address *</label>
              <input
                type="email"
                placeholder="john@example.com"
                className={styles.input}
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div>
              <label className={styles.formField}>Phone Number *</label>
              <input
                type="tel"
                placeholder="+1 (555) 000-0000"
                className={styles.input}
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>
          </div>
        </div>

        {/* Services Required Section */}
        <div>
          <h2 className={styles.sectionTitle}>Services Required</h2>
          <div className={styles.servicesGrid}>
            {Object.entries(formData.services).map(([key, value]) => (
              <label key={key} className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  className={styles.checkbox}
                  checked={value}
                  onChange={(e) => setFormData({
                    ...formData,
                    services: {...formData.services, [key]: e.target.checked}
                  })}
                />
                <span className={styles.checkboxText}>
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Project Budget Section */}
        <div>
          <h2 className={styles.sectionTitle}>Project Budget</h2>
          <div className={styles.budgetGrid}>
            {[
              ['5000-10000', '$5,000 - $10,000'],
              ['10000-25000', '$10,000 - $25,000'],
              ['25000+', '$25,000+']
            ].map(([value, label]) => (
              <label key={value} className={styles.radioLabel}>
                <input
                  type="radio"
                  name="budget"
                  className={styles.radio}
                  value={value}
                  checked={formData.projectBudget === value}
                  onChange={(e) => setFormData({...formData, projectBudget: e.target.value})}
                />
                <span className={styles.radioText}>{label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Project Timeline Section */}
        <div>
          <h2 className={styles.sectionTitle}>Project Timeline</h2>
          <div className={styles.budgetGrid}>
            {[
              ['1-3', '1-3 Months'],
              ['3-6', '3-6 Months'],
              ['6+', '6+ Months']
            ].map(([value, label]) => (
              <label key={value} className={styles.radioLabel}>
                <input
                  type="radio"
                  name="timeline"
                  className={styles.radio}
                  value={value}
                  checked={formData.projectTimeline === value}
                  onChange={(e) => setFormData({...formData, projectTimeline: e.target.value})}
                />
                <span className={styles.radioText}>{label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Project Description Section */}
        <div>
          <h2 className={styles.sectionTitle}>Project Description</h2>
          <textarea
            placeholder="Please describe your project requirements, goals, and any specific features you need..."
            className={styles.textarea}
            value={formData.projectDescription}
            onChange={(e) => setFormData({...formData, projectDescription: e.target.value})}
          />
        </div>

        {/* Submit Button */}
        <div className={styles.submitContainer}>
          <button type="submit" className={styles.submitButton}>
            Get Your Free Quote
          </button>
          <p className={styles.disclaimer}>* We'll get back to you within 24 hours with a detailed quote.</p>
        </div>
      </form>
    </div>
  

      
    </section>
  );
}
export default QuoteForm