'use client'
import { useEffect, useState } from 'react';
import styles from './Stats.module.css';
import { motion, AnimatePresence } from 'framer-motion';

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
    { number: '100', label: 'Projects Delivered', suffix: '+' },
    { number: '50', label: 'Happy Clients', suffix: '+' },
    { number: '95', label: 'Success Rate', suffix: '%' },
  ];
const Stats = (  ) => {
  return (
    <div className={styles.stats}>
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          className={styles.statItem}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 + index * 0.1 }}
        >
          <span className={styles.statNumber}>
            <CountUpNumber number={stat.number} delay={0.9 + index * 0.1} />
            {stat.suffix}
          </span>
          <span className={styles.statLabel}>{stat.label}</span>
        </motion.div>
      ))}
    </div>
  );
};

export default Stats;