'use client';
import { 
  Code, Database, Shield, Zap,GitBranch, Monitor
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import Navbar from '@/app/components/Navbar/Navbar';
import Footer from '@/app/components/Footer/Footer';

const CustomSoftwarePage = () => {
  const developmentFeatures = [
    {
      title: "Tailored Solutions",
      description: "Custom-built applications that perfectly align with your unique business processes, workflows, and objectives.",
      icon: <Code className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Scalable Architecture",
      description: "Future-proof solutions built on modern, scalable architectures that grow seamlessly with your business.",
      icon: <Database className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Enterprise Security",
      description: "Advanced security measures including encryption, authentication, and regular security audits to protect your data.",
      icon: <Shield className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Performance Optimization",
      description: "High-performance applications optimized for speed, reliability, and efficient resource utilization.",
      icon: <Zap className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Cross-Platform Development",
      description: "Seamless experiences across web, mobile, and desktop platforms with responsive design.",
      icon: <Monitor className="w-8 h-8 text-blue-600" />
    },
    {
      title: "API Integration",
      description: "Smooth integration with third-party services and existing business systems through robust APIs.",
      icon: <GitBranch className="w-8 h-8 text-blue-600" />
    }
  ];

  const techStack = [
    {
      category: "Frontend Development",
      technologies: ["React", "Next.js", "Vue.js", "Angular"],
      description: "Modern frameworks for responsive and interactive user interfaces",
      features: ["Component-Based Architecture", "State Management", "Server-Side Rendering", "Progressive Enhancement"]
    },
    {
      category: "Backend Development",
      technologies: ["Node.js", "Python", "Java", "Go"],
      description: "Robust server-side solutions for complex business logic",
      features: ["API Development", "Microservices", "Database Integration", "Authentication & Authorization"]
    },
    {
      category: "Database Solutions",
      technologies: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
      description: "Scalable data storage and management solutions",
      features: ["Data Modeling", "Query Optimization", "Caching", "High Availability"]
    },
    {
      category: "DevOps & Cloud",
      technologies: ["AWS", "Docker", "Kubernetes", "CI/CD"],
      description: "Modern deployment and infrastructure management",
      features: ["Container Orchestration", "Automated Deployment", "Monitoring", "Scaling"]
    }
  ];

  const developmentProcess = [
    {
      phase: "Discovery & Planning",
      activities: [
        "Requirements Analysis",
        "Technical Feasibility",
        "Architecture Design",
        "Project Timeline"
      ]
    },
    {
      phase: "Development",
      activities: [
        "Agile Methodology",
        "Sprint Planning",
        "Regular Updates",
        "Code Reviews"
      ]
    },
    {
      phase: "Quality Assurance",
      activities: [
        "Automated Testing",
        "Performance Testing",
        "Security Testing",
        "User Acceptance"
      ]
    },
    {
      phase: "Deployment & Support",
      activities: [
        "Production Deployment",
        "Monitoring Setup",
        "Documentation",
        "Maintenance"
      ]
    }
  ];

  return (
    <div>
      <Navbar />
   
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Custom Software Development</h1>
          <p>Transform your business with tailor-made software solutions that drive innovation, efficiency, and growth</p>
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
          <Image src="/csd.png" alt="Custom Software Development" width={600} height={400} />
        </div>
      </section>

      {/* Features Grid */}
      <section className={styles.features}>
        <h2>Comprehensive Development Services</h2>
        <div className={styles.featureGrid}>
          {developmentFeatures.map((feature, index) => (
            <div key={index} className={styles.featureCard}>
              <div className={styles.featureIcon}>{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Technology Stack */}
      <section className={styles.techStack}>
        <h2>Technology Expertise</h2>
        <div className={styles.techGrid}>
          {techStack.map((tech, index) => (
            <div key={index} className={styles.techCard}>
              <h3>{tech.category}</h3>
              <div className={styles.techList}>
                {tech.technologies.map((item, i) => (
                  <span key={i} className={styles.techItem}>{item}</span>
                ))}
              </div>
              <p>{tech.description}</p>
              <ul className={styles.featureList}>
                {tech.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Development Process */}
      <section className={styles.process}>
        <h2>Our Development Process</h2>
        <div className={styles.processSteps}>
          {developmentProcess.map((step, index) => (
            <div key={index} className={styles.processStep}>
              <div className={styles.stepNumber}>{index + 1}</div>
              <h3>{step.phase}</h3>
              <ul className={styles.activities}>
                {step.activities.map((activity, i) => (
                  <li key={i}>{activity}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <h2>Ready to Build Your Custom Solution?</h2>
        <p>Let's discuss how we can help transform your business with custom software</p>
        <Link href="/GetaQuote">
          <button className={styles.primaryBtn}>Schedule Consultation</button>
        </Link>
      </section>
    </div>
    <Footer />
    </div>
  );
};

export default CustomSoftwarePage;