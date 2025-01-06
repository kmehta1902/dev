'use client';
import styles from './Technologies.module.css';

const Technologies = () => {
  const technologies = {
    Frontend: {
      icon: '💻',
      iconContainerClass: styles.iconContainerFrontend,
      iconClass: styles.iconFrontend,
      dotClass: styles.dotFrontend,
      items: ['React.js', 'Angular', 'Vue.js', 'Next.js', 'Tailwind CSS']
    },
    Backend: {
      icon: '⚙️',
      iconContainerClass: styles.iconContainerBackend,
      iconClass: styles.iconBackend,
      dotClass: styles.dotBackend,
      items: ['Node.js', 'Python', 'Java Spring', '.NET Core', 'PHP Laravel']
    },
    Mobile: {
      icon: '📱',
      iconContainerClass: styles.iconContainerMobile,
      iconClass: styles.iconMobile,
      dotClass: styles.dotMobile,
      items: ['React Native', 'Flutter', 'iOS Swift', 'Android Kotlin', 'Xamarin']
    },
    'Cloud & DevOps': {
      icon: '☁️',
      iconContainerClass: styles.iconContainerCloud,
      iconClass: styles.iconCloud,
      dotClass: styles.dotCloud,
      items: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Jenkins']
    }
  };

  const partners = ['AWS', 'Google', 'Microsoft', 'Oracle', 'IBM', 'Salesforce'];

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Technologies We Master</h1>
        <p className={styles.subtitle}>
          We leverage the latest technologies to build scalable and robust solutions for your business
        </p>
      </div>

      <div className={styles.grid}>
        {Object.entries(technologies).map(([category, { icon, iconContainerClass, iconClass, dotClass, items }]) => (
          <div key={category} className={styles.card}>
            <div className={`${styles.iconContainer} ${iconContainerClass}`}>
              <span className={iconClass}>{icon}</span>
            </div>
            <h3 className={styles.categoryTitle}>{category}</h3>
            <ul className={styles.list}>
              {items.map((tech) => (
                <li key={tech} className={styles.listItem}>
                  <span className={dotClass}>•</span>
                  <span>{tech}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className={styles.partnersSection}>
        <h2 className={styles.partnersTitle}>Our Technology Partners</h2>
        <div className={styles.partnersGrid}>
          {partners.map((partner) => (
            <div key={partner} className={styles.partner}>
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;