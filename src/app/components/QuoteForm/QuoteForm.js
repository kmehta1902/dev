'use client';
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
      itConsulting: false,
    },
    projectBudget: '',
    projectTimeline: '',
    projectDescription: '',
  });

  const [currentStep, setCurrentStep] = useState(1); // Tracks the current step
  const [errors, setErrors] = useState({}); // Track error messages

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 4)); // Move to the next step
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1)); // Move to the previous step
  };

  const validateStep = (step) => {
    let valid = true;
    let newErrors = {};

    // Step 1: Personal details validation
    if (step === 1) {
      if (!formData.fullName) {
        newErrors.fullName = 'Full Name is required';
        valid = false;
      }
      if (!formData.email) {
        newErrors.email = 'Email is required';
        valid = false;
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address';
        valid = false;
      }
      if (!formData.phone) {
        newErrors.phone = 'Phone number is required';
        valid = false;
      } else if (!/^\+?[1-9]\d{1,14}$/.test(formData.phone)) {
        newErrors.phone = 'Please enter a valid phone number';
        valid = false;
      }
    }

    // Step 2: Service selection validation
    if (step === 2) {
      const servicesSelected = Object.values(formData.services).some((service) => service);
      if (!servicesSelected) {
        newErrors.services = 'At least one service must be selected';
        valid = false;
      }
    }

    // Step 3: Budget and Timeline validation
    if (step === 3) {
      if (!formData.projectBudget) {
        newErrors.projectBudget = 'Project Budget is required';
        valid = false;
      }
      if (!formData.projectTimeline) {
        newErrors.projectTimeline = 'Project Timeline is required';
        valid = false;
      }
    }

    // Step 4: Project description validation
    if (step === 4 && !formData.projectDescription) {
      newErrors.projectDescription = 'Project Description is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep(currentStep)) {
      console.log('Form Data:', formData);
      // Proceed with form submission (e.g., send to an API or email)
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div>
            <h2 className={styles.sectionTitle}>Personal Details</h2>
            <div className={styles.gridContainer}>
              <div>
                <label className={styles.formField}>Full Name *</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className={styles.input}
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                />
                {errors.fullName && <span className={styles.errorText}>{errors.fullName}</span>}
              </div>
              <div>
                <label className={styles.formField}>Company Name</label>
                <input
                  type="text"
                  placeholder="Your Company"
                  className={styles.input}
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                />
              </div>
              <div>
                <label className={styles.formField}>Email Address *</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className={styles.input}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                {errors.email && <span className={styles.errorText}>{errors.email}</span>}
              </div>
              <div>
                <label className={styles.formField}>Phone Number *</label>
                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className={styles.input}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
                {errors.phone && <span className={styles.errorText}>{errors.phone}</span>}
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div>
            <h2 className={styles.sectionTitle}>Services Required</h2>
            <div className={styles.servicesGrid}>
              {Object.entries(formData.services).map(([key, value]) => (
                <label key={key} className={styles.checkboxLabel}>
                  <input
                    type="checkbox"
                    className={styles.checkbox}
                    checked={value}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        services: { ...formData.services, [key]: e.target.checked },
                      })
                    }
                  />
                  <span className={styles.checkboxText}>{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                </label>
              ))}
            </div>
            {errors.services && <span className={styles.errorText}>{errors.services}</span>}
          </div>
        );
      case 3:
        return (
          <div>
            <h2 className={styles.sectionTitle}>Project Budget</h2>
            <div className={styles.budgetGrid}>
              {[
                ['5000-10000', '$5,000 - $10,000'],
                ['10000-25000', '$10,000 - $25,000'],
                ['25000+', '$25,000+'],
                ['Other', 'Other'],
              ].map(([value, label]) => (
                <label key={value} className={styles.radioLabel}>
                  <input
                    type="radio"
                    name="budget"
                    className={styles.radio}
                    value={value}
                    checked={formData.projectBudget === value}
                    onChange={(e) => setFormData({ ...formData, projectBudget: e.target.value })}
                  />
                  <span className={styles.radioText}>{label}</span>
                </label>
              ))}
            </div>
            {errors.projectBudget && <span className={styles.errorText}>{errors.projectBudget}</span>}

            <h2 className={styles.sectionTitle}>Project Timeline</h2>
            <div className={styles.budgetGrid}>
              {[
                ['1-3', '1-3 Months'],
                ['3-6', '3-6 Months'],
                ['6+', '6+ Months'],
              ].map(([value, label]) => (
                <label key={value} className={styles.radioLabel}>
                  <input
                    type="radio"
                    name="timeline"
                    className={styles.radio}
                    value={value}
                    checked={formData.projectTimeline === value}
                    onChange={(e) => setFormData({ ...formData, projectTimeline: e.target.value })}
                  />
                  <span className={styles.radioText}>{label}</span>
                </label>
              ))}
            </div>
            {errors.projectTimeline && <span className={styles.errorText}>{errors.projectTimeline}</span>}
          </div>
        );
      case 4:
        return (
          <div>
            <h2 className={styles.sectionTitle}>Project Description</h2>
            <textarea
              placeholder="Please describe your project requirements, goals, and any specific features you need..."
              className={styles.textarea}
              value={formData.projectDescription}
              onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
            />
            {errors.projectDescription && <span className={styles.errorText}>{errors.projectDescription}</span>}
            <p>* We'll get back to you within 24 hours with a detailed quote.*</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="quoteform" className={styles.quoteContainer}>
      <h1 className={styles.title}>Get a Free Quote</h1>
      <p className={styles.subbtitle}>
        Share your project details with us, and we'll provide you with a comprehensive proposal.
      </p>
      <br></br>
      <div className={styles.message}>If you’d like to share your project details with us, fill out the form below, then we’ll get back to you with a personalized quote. To submit, fill out the form below. The more details you give, the better we are able to understand what you are looking for so we can provide you with the best solution. </div>
      <br></br>
      <div className={styles.ccontainer}>
        <div className={styles.animation}>
          <video width="100%" height="100%" autoPlay loop muted playsInline>
            <source src="/vecteezy_user-profile-in-a-phone-animated-footage_46548580.mp4" type="video/mp4" />
          </video>
        </div>
        <div className={styles.formContainer}>
          <form onSubmit={handleSubmit} className={styles.formSection}>
            {renderStep()}
            <div className={styles.submitContainer}>
              {currentStep > 1 && (
                <button type="button" className={styles.submitButton} onClick={handleBack}>
                  Back
                </button>
              )}
              {currentStep < 4 ? (
                <button type="button" className={styles.submitButton} onClick={handleNext}>
                  Next
                </button>
              ) : (
                <button type="submit" className={styles.submitButton}>
                  Get Your Free Quote
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
