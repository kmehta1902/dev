'use client';

import styles from './Services.module.css';

export default function Services() {
  // Ensure all values are serializable
  const services = [
    {
      title: 'Web Development',
      description:
        'Custom web applications, responsive websites, and progressive web apps built with cutting-edge technologies.',
      icon: '💻', // Emoji icons are serializable as strings
    },
    {
      title: 'Mobile Development',
      description:
        'Native and cross-platform mobile applications for iOS and Android platforms.',
      icon: '📱',
    },
    {
      title: 'Enterprise Solutions',
      description:
        'Scalable enterprise software solutions, CRM systems, and business process automation.',
      icon: '🏢',
    },
    {
      title: 'Cloud Solutions',
      description:
        'Cloud infrastructure setup, migration services, and managed cloud solutions.',
      icon: '☁️',
    },
    {
      title: 'UI/UX Design',
      description:
        'User-centered design solutions, interface design, and user experience optimization.',
      icon: '🎨',
    },
    {
      title: 'IT Consulting',
      description:
        'Strategic technology consulting, digital transformation, and technical advisory services.',
      icon: '⚡',
    },
  ];

  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        {/* Header Section */}
        <div className={styles.header}>
          <h2 className={styles.title}>Our Services</h2>
          <p className={styles.description}>
            We offer comprehensive software development solutions tailored to meet your business needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className={styles.grid}>
          {services.map((service, index) => (
            <div key={index} className={styles.card}>
              {/* Service Icon */}
              <div className={styles.icon}>{service.icon}</div>

              {/* Service Title */}
              <h3 className={styles.cardTitle}>{service.title}</h3>

              {/* Service Description */}
              <p className={styles.cardDescription}>{service.description}</p>

              {/* Learn More Link */}
              <a href="#" className={styles.learnMore}>Learn More →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
