'use client'
import styles from './DevelopmentProcess.module.css';
const DevelopmentProcess = () => {
    const steps = [
      {
        id: '01',
        title: 'Discovery & Planning',
        description: 'Understanding your requirements, objectives, and creating a detailed project roadmap.',
        icon: '🔍'
      },
      {
        id: '02',
        title: 'Design & Architecture',
        description: 'Creating detailed designs and establishing the technical architecture.',
        icon: '✏️'
      },
      {
        id: '03',
        title: 'Development',
        description: 'Agile development with regular updates and continuous integration.',
        icon: '💻'
      },
      {
        id: '04',
        title: 'Testing & Quality Assurance',
        description: 'Thorough testing and quality checks to ensure perfect functionality.',
        icon: '✓'
      },
      {
        id: '05',
        title: 'Deployment & Support',
        description: 'Smooth deployment and continuous technical support post-launch.',
        icon: '🚀'
      }
    ];
  
    return (
      <section id='developmentprocess' className={styles.container}>
        <h1 className={styles.title}>Our Development Process</h1>
        <p className={styles.subtitle}>
          We follow a systematic approach to deliver high-quality solutions that meet your business needs
        </p>
  
        <div className={styles.timeline}>
          <div className={styles.verticalLine} />
          {steps.map((step) => (
            <div key={step.id} className={styles.step}>
              <div className={styles.dot} />
              <div className={styles.stepContent}>
                <div className={styles.stepNumber}>Step {step.id}</div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
                <div className={styles.icon}>{step.icon}</div>
              </div>
            </div>
          ))}
          <button className={styles.startButton}>Start Your Project →</button>
        </div>
      </section>
    );
  };
  
  export default DevelopmentProcess;