'use client';

import React from 'react';
import { 
  Code, 
  Cloud, 
  ShieldCheck, 
  Server, 
  Layout,
  Database,
  Globe,
  Cpu,
  Settings,
  Zap,
  Users,
  GitBranch,
  Monitor,
  Lock,
  Search,
  BarChart
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import Navbar from '@/app/components/Navbar/Navbar';
import Footer from '@/app/components/Footer/Footer';

const WebAppDevelopmentPage = () => {
  const developmentFeatures = [
    {
      title: "Custom Web Solutions",
      description: "Tailor-made web applications designed to address your specific business challenges and streamline operations with innovative solutions.",
      icon: <Code className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Full-Stack Development",
      description: "End-to-end development services covering both frontend and backend, ensuring seamless integration and optimal performance.",
      icon: <Cpu className="w-8 h-8 text-blue-600" />
    },
    {
      title: "API Development & Integration",
      description: "Custom API development and seamless integration with third-party services to extend your application's functionality.",
      icon: <Settings className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Cloud-Native Solutions",
      description: "Modern cloud-native applications built for scalability, reliability, and optimal resource utilization.",
      icon: <Cloud className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Security Implementation",
      description: "Robust security measures including encryption, authentication, and compliance with industry standards.",
      icon: <ShieldCheck className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Performance Optimization",
      description: "Advanced optimization techniques to ensure fast loading times and smooth user experience.",
      icon: <Zap className="w-8 h-8 text-blue-600" />
    }
  ];

  const technologies = [
    {
      name: "Frontend Technologies",
      description: "Modern frameworks and libraries for dynamic UIs",
      features: ["React", "Angular", "Vue.js", "Next.js", "TypeScript", "Tailwind CSS", "Redux"]
    },
    {
      name: "Backend Technologies",
      description: "Robust server-side solutions",
      features: ["Node.js", "Python/Django", "PHP/Laravel", "Java Spring", "Go", "GraphQL"]
    },
    {
      name: "Database Solutions",
      description: "Scalable data storage and management",
      features: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "ElasticSearch", "Firebase"]
    },
    {
      name: "DevOps & Cloud",
      description: "Deployment and infrastructure management",
      features: ["Docker", "Kubernetes", "AWS", "Azure", "CI/CD", "Terraform"]
    }
  ];

  const expertise = [
    {
      title: "Progressive Web Apps",
      description: "Creating installable web apps with offline capabilities",
      icon: <Globe className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Database Architecture",
      description: "Optimized data structures for scalability",
      icon: <Database className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Real-time Applications",
      description: "Live data processing and instant updates",
      icon: <Monitor className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Analytics Integration",
      description: "Data tracking and business intelligence",
      icon: <BarChart className="w-8 h-8 text-blue-600" />
    }
  ];

  const processSteps = [
    {
      title: "Discovery & Planning",
      description: "Comprehensive analysis of requirements and planning the development roadmap.",
      subSteps: ["Requirements Gathering", "Technical Assessment", "Architecture Planning", "Project Scoping"]
    },
    {
      title: "Design & Architecture",
      description: "Creating robust architecture and technical specifications.",
      subSteps: ["System Design", "Database Schema", "API Design", "Security Planning"]
    },
    {
      title: "Development",
      description: "Agile development process with regular updates and iterations.",
      subSteps: ["Frontend Development", "Backend Development", "API Integration", "Database Implementation"]
    },
    {
      title: "Testing & QA",
      description: "Comprehensive testing to ensure quality and reliability.",
      subSteps: ["Unit Testing", "Integration Testing", "Performance Testing", "Security Audits"]
    },
    // {
    //   title: "Deployment & Support",
    //   description: "Smooth deployment and continuous maintenance.",
    //   subSteps: ["CI/CD Setup", "Cloud Deployment", "Monitoring Setup", "Ongoing Support"]
    // }
  ];

  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1>Web Application Development</h1>
            <p>Build powerful, scalable, and secure web applications that drive your business forward. Our expert team delivers custom solutions that combine cutting-edge technology with exceptional user experience.</p>
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
            <Image src="/wd.webp" alt="Web Application Development" width={600} height={400} />
          </div>
        </section>

        {/* Features Grid */}
        <section className={styles.features}>
          <h2>Development Services</h2>
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

        {/* Expertise Section */}
        {/* <section className={styles.expertise}>
          <h2>Specialized Capabilities</h2>
          <div className={styles.expertiseGrid}>
            {expertise.map((item, index) => (
              <div key={index} className={styles.expertiseCard}>
                <div className={styles.expertiseIcon}>{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </section> */}

        {/* Technology Stack */}
        <section className={styles.techStack}>
          <h2>Technology Stack</h2>
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
          <h2>Development Process</h2>
          <div className={styles.processSteps}>
            {processSteps.map((step, index) => (
              <div key={index} className={styles.processStep}>
                <div className={styles.stepNumber}>{index + 1}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                <div className={styles.subSteps}>
                  {step.subSteps.map((subStep, sIndex) => (
                    <span key={sIndex} className={styles.subStep}>{subStep}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section
        <section className={styles.stats}>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <h3>500+</h3>
              <p>Projects Delivered</p>
            </div>
            <div className={styles.statCard}>
              <h3>99.9%</h3>
              <p>Uptime Guarantee</p>
            </div>
            <div className={styles.statCard}>
              <h3>45%</h3>
              <p>Performance Improvement</p>
            </div>
            <div className={styles.statCard}>
              <h3>24/7</h3>
              <p>Support Available</p>
            </div>
          </div>
        </section> */}

        {/* CTA Section */}
        <section className={styles.cta}>
          <h2>Ready to Build Your Web Application?</h2>
          <p>Let's create a powerful web solution that drives your business success</p>
          <div className={styles.ctaButtonss}>
            <Link href="/GetaQuote">
              <button className={styles.primaryBtn}>Get Started</button>
            </Link>
            
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default WebAppDevelopmentPage;