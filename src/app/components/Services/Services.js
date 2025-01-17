// Services.js
'use client';

import { useRef, useState, useEffect } from 'react';
import styles from './Services.module.css';
import { Monitor, Building2, Cloud, LightbulbIcon, Globe, Smartphone, Rocket, Palette, Users } from 'lucide-react';
import { useSwipeGesture } from '../SwipeGesture/SwipeGesture';
import Link from 'next/link';

const ServiceCard = ({ service, isActive, isMobile }) => {
  
  const divRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!divRef.current || isMobile) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();
    
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={divRef}
      className={`${styles.card} ${isActive ? styles.activeCard : ''}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsFocused(true)}
      onMouseLeave={() => setIsFocused(false)}
    >
      {!isMobile && (
        <div
          className={styles.spotlight}
          style={{
            opacity: isFocused ? 1 : 0,
            transform: `translate(${position.x}px, ${position.y}px)`,
          }}
        />
      )}
      <div className={styles.cardContent}>
        <div className={styles.iconWrapper}>
          {service.icon}
        </div>
        <h3 className={styles.cardTitle}>{service.title}</h3>
        <p className={styles.cardDescription}>{service.description}</p>
        <ul className={styles.featureList}>
          {service.features.map((feature, index) => (
            <li key={index} className={styles.featureItem}>
              <span className={styles.checkmark}>✓</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default function Services() {
  const { onTouchStart, onTouchMove, onTouchEnd } = useSwipeGesture({
    onSwipeLeft: () => {
      setCurrentCardIndex((prev) => (prev + 1) % services.length);
    },
    onSwipeRight: () => {
      setCurrentCardIndex((prev) => (prev - 1 + services.length) % services.length);
    }
  });
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const cardScrollRef = useRef(null);
  const cardAnimationRef = useRef(null);
  const lastCardScrollTime = useRef(0);
  const autoScrollEnabled = useRef(true);

  const services = [
    { url:'customised-software-development',
      title: 'Customised Software Development',
      description: "We turn cutting-edge ideas into robust expandable software that fits your company's needs perfectly.",
      icon: <Monitor className={styles.icon} />,
      features: ['Custom Development', 'Scalable Solutions', 'Modern Technologies']
    },
    {
      url:'enterprise-solutions',
      title: 'Enterprise Solutions',
      description: 'We provide full-scale business solutions that boost your productivity and help your company achieve its highest goals.',
      icon: <Building2 className={styles.icon} />,
      features: ['Business Integration', 'Process Automation', 'Enterprise Security']
    },
    {
      url:'cloud-solutions',
      title: 'Cloud Solutions',
      description: 'We set up secure, flexible, and smart cloud systems to push your digital shift forward.',
      icon: <Cloud className={styles.icon} />,
      features: ['Cloud Migration', 'AWS/Azure Services', 'Cloud Security']
    },
    {
      url:'it-consultancy',
      title: 'Expert IT Consultancy',
      description: 'We guide you in picking the right software and tech to ensure success through better business practices.',
      icon: <LightbulbIcon className={styles.icon} />,
      features: ['Strategic Planning', 'Technical Advisory', 'Digital Transformation']
    },
    {
      url:'web-application-development',
      title: 'Next-Gen Web Application Development',
      description: 'We create top-notch website solutions that work great and are a breeze to use.',
      icon: <Globe className={styles.icon} />,
      features: ['Responsive Design', 'Performance Optimization', 'SEO Ready']
    },
    {
      url:'iosandroid-app-development',
      title: 'iOS/Android App Development',
      description: 'We build native and multi-platform mobile apps that hook users and help your business grow.',
      icon: <Smartphone className={styles.icon} />,
      features: ['Native Apps', 'Cross-Platform', 'User-Centric Design']
    },
    {
      url:'mvp-product-development',
      title: 'MVP Product Development',
      description: 'We make high-quality MVPs fast to help you test and fine-tune your market plans.',
      icon: <Rocket className={styles.icon} />,
      features: ['Rapid Development', 'Core Features', 'Market Testing']
    },
    {
      url:'uiux-design',
      title: 'UI/UX Design',
      description: 'We craft designs with users in mind to create digital experiences that stick.',
      icon: <Palette className={styles.icon} />,
      features: ['User Research', 'Interface Design', 'Usability Testing']
    },
    {
      url:'tech-resources',
      title: 'Tech Resources',
      description: 'We provide skilled technical resources for all your project needs.',
      icon: <Users className={styles.icon} />,
      features: ['Skilled Teams', 'Flexible Hiring', 'Project Management']
    }
  ];

  const startCardScrolling = () => {
    if (!isMobile || !autoScrollEnabled.current) return;
    
    const scroll = (timestamp) => {
      if (!lastCardScrollTime.current) lastCardScrollTime.current = timestamp;
      const deltaTime = timestamp - lastCardScrollTime.current;
      
      if (deltaTime >= 3000) { // Change card every 3 seconds
        setCurrentCardIndex((prev) => (prev + 1) % services.length);
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

  const handleInteraction = (isInteracting) => {
    autoScrollEnabled.current = !isInteracting;
    if (isInteracting) {
      stopCardScrolling();
    } else {
      startCardScrolling();
    }
  };

  useEffect(() => {
    const checkMobile = () => {
      const isMobileView = window.innerWidth <= 768;
      setIsMobile(isMobileView);
      if (!isMobileView) {
        stopCardScrolling();
        setCurrentCardIndex(0);
      } else {
        startCardScrolling();
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      stopCardScrolling();
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Our Services</h2>
          <p className={styles.description}>
            We offer comprehensive software development solutions tailored to meet your business needs.
          </p>
        </div>
        <div 
  className={styles.grid}
  ref={cardScrollRef}
  onTouchStart={(e) => {
    handleInteraction(true);
    onTouchStart(e);
  }}
  onTouchMove={onTouchMove}
  onTouchEnd={(e) => {
    onTouchEnd(e);
    handleInteraction(false);
  }}
>

          {services.map((service, index) => (
            <Link href={`/Services/${service.url}`}>
            <ServiceCard
            

              key={index} 
              service={service} 
              isActive={isMobile ? index === currentCardIndex : true}
              isMobile={isMobile}
              
            />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}