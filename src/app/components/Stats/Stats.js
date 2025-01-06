import React, { useEffect, useState } from 'react';
import { Briefcase, Users, Trophy,Computer } from 'lucide-react';
import styles from './Stats.module.css';

const CountUpNumber = ({ number, delay }) => {
  const [count, setCount] = useState(0);
  const duration = 2000;
  const finalNumber = parseInt(number, 10);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const start = Date.now();
      const animate = () => {
        const now = Date.now();
        const progress = Math.min((now - start) / duration, 1);
        setCount(Math.floor(progress * finalNumber));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }, delay * 1000);
    return () => clearTimeout(timeout);
  }, [finalNumber, delay]);

  return count.toString();
};

const stats = [
  {
    number: '100',
    label: 'Projects Delivered',
    suffix: '+',
    icon: <Briefcase size={32} style={{ color: '#2563eb' }} />
  },
  {
    number: '50',
    label: 'Happy Clients',
    suffix: '+',
    icon: <Users size={32} style={{ color: '#2563eb' }} />
  },
  {
    number: '95',
    label: 'Success Rate',
    suffix: '%',
    icon: <Trophy size={32} style={{ color: '#2563eb' }} />
  },
  {
    number: '50',
    label: 'Software Developers',
    suffix: '+',
    icon: <Computer size={32} style={{ color: '#2563eb' }} />
  },
];

const Stats = () => {
  return (
    <div className={styles.statsGrid}>
      {stats.map((stat, index) => (
        <div key={index} className={styles.statCard}>
          <div className={styles.statContent}>
            <div className={styles.iconWrapper}>
              {stat.icon}
            </div>
            <div className={styles.statNumber}>
              <CountUpNumber number={stat.number} delay={0.9 + index * 0.1} />
              {stat.suffix}
            </div>
            <div className={styles.statLabel}>
              {stat.label}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stats;