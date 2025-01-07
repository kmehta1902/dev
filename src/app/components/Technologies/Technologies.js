import { useState, useEffect, useRef } from 'react';
import styles from './Technologies.module.css';

const Technologies = () => {
  const [activeName, setActiveName] = useState('');
  const scrollRef = useRef(null);
  const animationRef = useRef(null);
  const lastScrollTime = useRef(0);

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
  const scrollingPartners = [...partners, ...partners, ...partners, ...partners,...partners,...partners,...partners,...partners,...partners,...partners,...partners,...partners,...partners,...partners,...partners,...partners,...partners,...partners,...partners,...partners,...partners,...partners,...partners,...partners,...partners,...partners,...partners,...partners,...partners,...partners,...partners,...partners,...partners,...partners,...partners,...partners,...partners,...partners,...partners,...partners,...partners,...partners,...partners,...partners,...partners,...partners,...partners,...partners,...partners,...partners,...partners,...partners,...partners,...partners,...partners,...partners,...partners,...partners,...partners,...partners,...partners,...partners,...partners,...partners,...partners,...partners,...partners,...partners,...partners,...partners,...partners,...partners,...partners,...partners,...partners];

  const findCenterPartner = () => {
    const container = scrollRef.current;
    if (!container) return null;

    const containerRect = container.getBoundingClientRect();
    const containerCenter = containerRect.left + (containerRect.width / 2);
    
    let closestPartner = null;
    let closestDistance = Infinity;

    const partnerElements = container.getElementsByClassName(styles.partner);
    Array.from(partnerElements).forEach(partner => {
      const rect = partner.getBoundingClientRect();
      const partnerCenter = rect.left + (rect.width / 2);
      const distance = Math.abs(containerCenter - partnerCenter);
      
      if (distance < closestDistance) {
        closestDistance = distance;
        closestPartner = partner;
      }
    });

    return closestPartner;
  };

  const startScrolling = () => {
    const container = scrollRef.current;
    let scrollSpeed = window.innerWidth <= 480 ? 0.5 : 1; // Slower speed for mobile
    
    const scroll = (timestamp) => {
      if (!lastScrollTime.current) lastScrollTime.current = timestamp;
      const deltaTime = timestamp - lastScrollTime.current;
      
      if (deltaTime >= 16) { // Limit to ~60fps
        if (container) {
          if (container.scrollLeft >= (container.scrollWidth / 3) * 2) {
            container.scrollLeft = 0;
          } else {
            container.scrollLeft += scrollSpeed;
          }

          const centerPartner = findCenterPartner();
          if (centerPartner) {
            const newActiveName = centerPartner.textContent;
            if (newActiveName !== activeName) {
              setActiveName(newActiveName);
            }
          }
        }
        lastScrollTime.current = timestamp;
      }
      
      animationRef.current = requestAnimationFrame(scroll);
    };

    animationRef.current = requestAnimationFrame(scroll);
  };

  const stopScrolling = () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      lastScrollTime.current = 0;
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      // Initial delay and scroll to first item
      const timeoutId = setTimeout(() => {
        container.scrollLeft = 0;
        startScrolling();
      }, 1000);

      container.addEventListener('mouseenter', stopScrolling);
      container.addEventListener('mouseleave', startScrolling);
      container.addEventListener('touchstart', stopScrolling);
      container.addEventListener('touchend', startScrolling);

      return () => {
        clearTimeout(timeoutId);
        stopScrolling();
        container.removeEventListener('mouseenter', stopScrolling);
        container.removeEventListener('mouseleave', startScrolling);
        container.removeEventListener('touchstart', stopScrolling);
        container.removeEventListener('touchend', startScrolling);
      };
    }
  }, []);

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
        <div className={styles.partnersWrapper}>
          <div 
            ref={scrollRef}
            className={styles.partnersTrack}
          >
            {scrollingPartners.map((partner, index) => (
              <div
                key={`${partner}-${index}`}
                className={`${styles.partner} ${partner === activeName ? styles.partnerActive : ''}`}
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;