import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.badge}>Innovative Software Solutions</div>
            <h1 className={styles.title}>
              Transform Your Business with{' '}
              <span className={styles.highlight}>Custom Software Solutions</span>
            </h1>
            <p className={styles.description}>
              We craft tailored software solutions that empower businesses to thrive in the digital age. 
              From web applications to enterprise systems, we bring your vision to life.
            </p>
            <div className={styles.buttons}>
              <button className={styles.primaryButton}>Get Started →</button>
              <button className={styles.secondaryButton}>View Our Work</button>
            </div>
            <div className={styles.stats}>
              <div className={styles.stat}>
                <div className={styles.statNumber}>100+</div>
                <div className={styles.statLabel}>Projects Delivered</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>50+</div>
                <div className={styles.statLabel}>Happy Clients</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>95%</div>
                <div className={styles.statLabel}>Success Rate</div>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.heroImage}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
