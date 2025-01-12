'use client';
import { 
  Users, ClipboardList, Clock, Briefcase, Cpu, Settings 
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import Navbar from '@/app/components/Navbar/Navbar';
import Footer from '@/app/components/Footer/Footer';

const TechResourcesPage = () => {
  const techFeatures = [
    {
      title: "Dedicated Developers",
      description: "Hire professionals with expertise in specific technologies to bring your ideas to life.",
      icon: <Users className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Flexible Engagement Models",
      description: "Choose from part-time, full-time, or project-based hiring options tailored to your needs.",
      icon: <ClipboardList className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Scalable Teams",
      description: "Quickly scale your team up or down as your project demands change.",
      icon: <Cpu className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Tech Stack Expertise",
      description: "Access specialists in modern technologies and tools to enhance your project’s success.",
      icon: <Settings className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Cost-Effective Solutions",
      description: "Save on hiring overheads while maintaining access to premium talent.",
      icon: <Briefcase className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Fast Turnaround",
      description: "Onboard professionals and get started on your project in as little as 48 hours.",
      icon: <Clock className="w-8 h-8 text-blue-600" />
    }
  ];

  const technologies = [
    {
      name: "JavaScript",
      description: "Expertise in modern JS frameworks like React, Vue, and Angular.",
      features: ["React.js", "Node.js", "Vue.js", "Next.js", "TypeScript"]
    },
    {
      name: "Python",
      description: "Specialists in Python for AI, machine learning, and backend development.",
      features: ["Django", "Flask", "Pandas", "TensorFlow", "NumPy"]
    },
    {
      name: "Ruby on Rails",
      description: "Experienced Ruby developers for scalable and robust web applications.",
      features: ["ActiveRecord", "RSpec", "Capistrano", "PostgreSQL"]
    },
    {
      name: "Cloud Platforms",
      description: "Certified developers for AWS, Azure, and Google Cloud integration.",
      features: ["Lambda", "Cloud Functions", "EC2", "Kubernetes"]
    }
  ];

  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1>Tech Resources On-Demand</h1>
            <p>Access top-tier developers and engineers to supercharge your projects with scalable and flexible hiring models.</p>
            <div className={styles.ctaButtons}>
              <Link href="/GetaQuote">
                <button className={styles.primaryBtn}>Schedule Consultation</button>
              </Link>
              <Link href="/Portfolio">
                <button className={styles.secondaryBtn}>View Portfolio</button>
              </Link>
            </div>
          </div>
          <div className={styles.heroImage}>
            <Image src="/tr.jpeg" alt="Tech Team" width={600} height={400} />
          </div>
        </section>

        {/* Features Section */}
        <section className={styles.features}>
          <h2>Why Choose Our Tech Resources?</h2>
          <div className={styles.featureGrid}>
            {techFeatures.map((feature, index) => (
              <div key={index} className={styles.featureCard}>
                <div className={styles.featureIcon}>{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Technology Stack Section */}
        <section className={styles.techStack}>
          <h2>Our Technology Expertise</h2>
          <div className={styles.techGrid}>
            {technologies.map((tech, index) => (
              <div key={index} className={styles.techCard}>
                <h3>{tech.name}</h3>
                <p>{tech.description}</p>
                <ul className={styles.techFeatures}>
                  {tech.features.map((feature, fIndex) => (
                    <li key={fIndex}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className={styles.process}>
          <h2>How It Works</h2>
          <div className={styles.processSteps}>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>1</div>
              <h3>Define Your Needs</h3>
              <p>Share your project goals, requirements, and timeline with us.</p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>2</div>
              <h3>Review Talent</h3>
              <p>We handpick the best candidates for your project and share their profiles.</p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>3</div>
              <h3>Onboard Quickly</h3>
              <p>Integrate your chosen experts into your team within days.</p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>4</div>
              <h3>Achieve Results</h3>
              <p>Work with skilled professionals to deliver outstanding results.</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.cta}>
          <h2>Ready to Build Your Dream Team?</h2>
          <p>Let us help you find the right talent for your projects.</p>
          <Link href="/GetaQuote">
            <button className={styles.primaryBtn}>Get Started</button>
          </Link>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default TechResourcesPage;
