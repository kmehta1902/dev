'use client';

import styles from './Testimonials.module.css';

const Testimonials = () => {
  // Testimonials data - fully serializable
  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      position: 'CEO, Tech Solutions Inc.',
      initials: 'JD',
      color: '#4285f4',
      text: "DevionX Technologies delivered our project on time and exceeded our expectations. Their team's expertise and professionalism made the development process smooth and efficient.",
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      position: 'Marketing Director, Global Retail',
      initials: 'SJ',
      color: '#34a853',
      text: "Working with DevionX Technologies has been a game-changer for our business. Their innovative solutions and attention to detail have helped us achieve our digital transformation goals.",
    },
    {
      id: 3,
      name: 'Michael Park',
      position: 'CTO, Innovation Labs',
      initials: 'MP',
      color: '#a142f4',
      text: "The team at DevionX Technologies demonstrates exceptional technical expertise and commitment to quality. They've been instrumental in our digital success.",
    },
  ];

  return (
    <section id="testimonials" className={styles.container}>
      {/* Header Section */}
      <h1 className={styles.title}>Client Testimonials</h1>
      <p className={styles.subtitle}>
        What our clients say about working with DevionX Technologies
      </p>

      {/* Testimonials Grid */}
      <div className={styles.testimonialGrid}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className={styles.card}>
            {/* Testimonial Header */}
            <div className={styles.header}>
              {/* Avatar */}
              <div
                className={styles.avatar}
                style={{ backgroundColor: testimonial.color }}
              >
                {testimonial.initials}
              </div>

              {/* Client Information */}
              <div className={styles.info}>
                <h3>{testimonial.name}</h3>
                <p>{testimonial.position}</p>
              </div>
            </div>

            {/* Star Rating */}
            <div className={styles.stars}>{'★'.repeat(5)}</div>

            {/* Testimonial Text */}
            <p className={styles.text}>{testimonial.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
