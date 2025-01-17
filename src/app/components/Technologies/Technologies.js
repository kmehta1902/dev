import { useState, useEffect, useRef } from 'react';
import styles from './Technologies.module.css';
import { useSwipeGesture } from '../SwipeGesture/SwipeGesture';

const Technologies = () => {
  const [activeName, setActiveName] = useState('');
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(4);
  const [isTabletView, setIsTabletView] = useState(false);
  const scrollRef = useRef(null);
  const cardScrollRef = useRef(null);
  const animationRef = useRef(null);
  const cardAnimationRef = useRef(null);
  const lastScrollTime = useRef(0);
  const lastCardScrollTime = useRef(0);
  const isMobileRef = useRef(false);

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
  const scrollingPartners = [...Array(75)].flatMap(() => partners);

  const handleCardChange = (direction) => {
    setCurrentCardIndex(prev => {
      if (direction === 'next') {
        return (prev + 1) % Object.keys(technologies).length;
      } else {
        return (prev - 1 + Object.keys(technologies).length) % Object.keys(technologies).length;
      }
    });
  };

  const { onTouchStart, onTouchMove, onTouchEnd } = useSwipeGesture({
    onSwipeLeft: () => handleCardChange('next'),
    onSwipeRight: () => handleCardChange('prev')
  });

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

  const startCardScrolling = () => {
    if (!isMobileRef.current && !isTabletView) return;
    
    const scroll = (timestamp) => {
      if (!lastCardScrollTime.current) lastCardScrollTime.current = timestamp;
      const deltaTime = timestamp - lastCardScrollTime.current;
      
      if (deltaTime >= 3000) {
        handleCardChange('next');
        lastCardScrollTime.current = timestamp;
      }
      
      cardAnimationRef.current = requestAnimationFrame(scroll);
    };

    cardAnimationRef.current = requestAnimationFrame(scroll);
  };

  const stopCardScrolling = () => {
    if (cardAnimationRef.current) {
      cancelAnimationFrame(cardAnimationRef.current);
      lastCardScrollTime.current = 0;
    }
  };

  const startPartnerScrolling = () => {
    const container = scrollRef.current;
    let scrollSpeed = window.innerWidth <= 480 ? 0.5 : 1;
    
    const scroll = (timestamp) => {
      if (!lastScrollTime.current) lastScrollTime.current = timestamp;
      const deltaTime = timestamp - lastScrollTime.current;
      
      if (deltaTime >= 16) {
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

  const stopPartnerScrolling = () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      lastScrollTime.current = 0;
    }
  };

  const getVisibleCards = () => {
    const cards = [];
    for (let i = 0; i < visibleCards; i++) {
      const index = (currentCardIndex + i) % Object.keys(technologies).length;
      cards.push(index);
    }
    return cards;
  };

  useEffect(() => {
    const checkViewport = () => {
      const width = window.innerWidth;
      isMobileRef.current = width <= 480;
      setIsTabletView(width > 480 && width < 1024);
      setVisibleCards(width >= 1024 ? 4 : width >= 768 ? 3 : width >= 480 ? 2 : 1);
      
      if (isMobileRef.current || isTabletView) {
        startCardScrolling();
      } else {
        stopCardScrolling();
        setCurrentCardIndex(0);
      }
    };

    checkViewport();
    window.addEventListener('resize', checkViewport);

    const container = scrollRef.current;
    
    if (container) {
      const timeoutId = setTimeout(() => {
        container.scrollLeft = 0;
        startPartnerScrolling();
      }, 1000);

      container.addEventListener('mouseenter', stopPartnerScrolling);
      container.addEventListener('mouseleave', startPartnerScrolling);
      container.addEventListener('touchstart', stopPartnerScrolling);
      container.addEventListener('touchend', startPartnerScrolling);

      return () => {
        clearTimeout(timeoutId);
        stopPartnerScrolling();
        stopCardScrolling();
        window.removeEventListener('resize', checkViewport);
        container.removeEventListener('mouseenter', stopPartnerScrolling);
        container.removeEventListener('mouseleave', startPartnerScrolling);
        container.removeEventListener('touchstart', stopPartnerScrolling);
        container.removeEventListener('touchend', startPartnerScrolling);
      };
    }
  }, [isTabletView]);

  const techEntries = Object.entries(technologies);

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Technologies We Master</h1>
        <p className={styles.subtitle}>
          We leverage the latest technologies to build scalable and robust solutions for your business
        </p>
      </div>
      <div className={styles.grid} 
        ref={cardScrollRef}
        onTouchStart={(e) => {
          (isMobileRef.current || isTabletView) && stopCardScrolling();
          onTouchStart(e);
        }}
        onTouchMove={onTouchMove}
        onTouchEnd={(e) => {
          onTouchEnd(e);
          (isMobileRef.current || isTabletView) && startCardScrolling();
        }}
      >
        {techEntries.map(([category, { icon, iconContainerClass, iconClass, dotClass, items }], index) => (
          <div 
            key={category} 
            className={`${styles.card} ${
              (isMobileRef.current && index === currentCardIndex) || 
              (isTabletView && getVisibleCards().includes(index)) || 
              (!isMobileRef.current && !isTabletView) ? styles.activeCard : ''
            }`}
            onMouseEnter={() => (isMobileRef.current || isTabletView) && stopCardScrolling()}
            onMouseLeave={() => (isMobileRef.current || isTabletView) && startCardScrolling()}
            onTouchStart={() => (isMobileRef.current || isTabletView) && stopCardScrolling()}
            onTouchEnd={() => (isMobileRef.current || isTabletView) && startCardScrolling()}
          >
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