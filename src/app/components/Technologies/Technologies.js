'use client';

import styles from './Technologies.module.css';

const Technologies = () => {
  // Serializable technology categories and partners
  const technologies = {
    Frontend: ['React.js', 'Angular', 'Vue.js', 'Next.js', 'Tailwind CSS'],
    Backend: ['Node.js', 'Python', 'Java Spring', '.NET Core', 'PHP Laravel'],
    Mobile: ['React Native', 'Flutter', 'iOS Swift', 'Android Kotlin', 'Xamarin'],
    'Cloud & DevOps': ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Jenkins'],
  };

  const partners = ['AWS', 'Google', 'Microsoft', 'Oracle', 'IBM', 'Salesforce'];

  return (
    <section id="technologies" className={styles.container}>
      {/* Header Section */}
      <h1 className={styles.title}>Technologies We Master</h1>
      <p className={styles.subtitle}>
        We leverage the latest technologies to build scalable and robust solutions for your business.
      </p>

      {/* Technologies Grid */}
      <div className={styles.techGrid}>
        {Object.entries(technologies).map(([category, techs]) => (
          <div key={category} className={styles.card}>
            {/* Category Icon */}
            <div className={styles.icon}>
              {category === 'Frontend' && '💻'}
              {category === 'Backend' && '⚙️'}
              {category === 'Mobile' && '📱'}
              {category === 'Cloud & DevOps' && '☁️'}
            </div>

            {/* Category Title */}
            <h3>{category}</h3>

            {/* Technologies List */}
            <ul>
              {techs.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Partners Section */}
      <h2 className={styles.partnerTitle}>Our Technology Partners</h2>
      <div className={styles.partners}>
        {partners.map((partner) => (
          <div key={partner} className={styles.partner}>
            {partner}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
