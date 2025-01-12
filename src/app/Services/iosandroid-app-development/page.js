'use client';

import {
  Smartphone, RefreshCcw, ShieldCheck, Code, Layout,
  Zap, Cloud, Globe, Star, Settings, Share2,
  Database, Lock, Server
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import Navbar from '@/app/components/Navbar/Navbar';
import Footer from '@/app/components/Footer/Footer';

const MobileAppDevelopmentPage = () => {
  const appFeatures = [
    {
      title: "Native iOS Development",
      description: "Build powerful iOS applications using Swift and leveraging the latest Apple technologies for optimal performance and user experience.",
      icon: <Smartphone className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Android Development",
      description: "Create robust Android apps using Kotlin and Java, taking advantage of the Android ecosystem's extensive capabilities.",
      icon: <Code className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Cross-Platform Solutions",
      description: "Develop cost-effective applications that run seamlessly on both iOS and Android using React Native or Flutter.",
      icon: <Share2 className="w-8 h-8 text-blue-600" />
    },
    {
      title: "UI/UX Design",
      description: "Create intuitive, engaging user interfaces following platform-specific design guidelines and best practices.",
      icon: <Layout className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Backend Integration",
      description: "Seamlessly connect your mobile app with robust backend services and APIs for data management and processing.",
      icon: <Server className="w-8 h-8 text-blue-600" />
    },
    {
      title: "App Security",
      description: "Implement comprehensive security measures to protect user data and ensure safe transactions.",
      icon: <ShieldCheck className="w-8 h-8 text-blue-600" />
    }
  ];

  const developmentStack = [
    {
      name: "iOS Development",
      description: "Native development using Apple's latest technologies",
      features: ["Swift", "SwiftUI", "Core Data", "Push Notifications", "In-App Purchases"]
    },
    {
      name: "Android Development",
      description: "Modern Android app development with Kotlin",
      features: ["Kotlin", "Jetpack Compose", "Material Design", "Room Database", "Firebase"]
    },
    {
      name: "Cross-Platform",
      description: "Efficient multi-platform development solutions",
      features: ["React Native", "Flutter", "Shared Codebase", "Platform-Specific UI"]
    },
    {
      name: "Backend Services",
      description: "Scalable backend infrastructure for mobile apps",
      features: ["RESTful APIs", "Real-time Sync", "Cloud Storage", "Authentication", "Analytics"]
    }
  ];

  const appBenefits = [
    {
      title: "Performance Optimization",
      description: "High-performance apps with fast load times and smooth interactions.",
      metrics: ["60 FPS animations", "Quick startup time", "Efficient memory usage"]
    },
    {
      title: "User Experience",
      description: "Intuitive interfaces that delight users and drive engagement.",
      metrics: ["Platform-specific design", "Accessibility support", "Offline capabilities"]
    },
    {
      title: "Scalability",
      description: "Apps that grow with your user base and evolving requirements.",
      metrics: ["Cloud infrastructure", "Microservices architecture", "Load balancing"]
    }
  ];

  return (
    <div>
      <Navbar />
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Mobile App Development</h1>
          <p>Transform your ideas into powerful, user-friendly mobile applications for iOS and Android platforms</p>
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
          <Image src="/ad.jpeg" alt="Mobile App Development" width={600} height={400} />
        </div>
      </section>

      {/* Features Grid */}
      <section className={styles.features}>
        <h2>Development Capabilities</h2>
        <div className={styles.featureGrid}>
          {appFeatures.map((feature, index) => (
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
        <h2>Development Technologies</h2>
        <div className={styles.techGrid}>
          {developmentStack.map((stack, index) => (
            <div key={index} className={styles.techCard}>
              <h3>{stack.name}</h3>
              <p>{stack.description}</p>
              <ul className={styles.techFeatures}>
                {stack.features.map((feature, fIndex) => (
                  <li key={fIndex}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className={styles.benefits}>
        <h2>App Benefits</h2>
        <div className={styles.benefitsGrid}>
          {appBenefits.map((benefit, index) => (
            <div key={index} className={styles.benefitCard}>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
              <ul className={styles.benefitMetrics}>
                {benefit.metrics.map((metric, mIndex) => (
                  <li key={mIndex}>{metric}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Development Process */}
      <section className={styles.process}>
        <h2>Development Process</h2>
        <div className={styles.processSteps}>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>1</div>
            <h3>Strategy</h3>
            <p>Define app requirements, target audience, and technical specifications</p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>2</div>
            <h3>Design</h3>
            <p>Create intuitive UI/UX designs and interactive prototypes</p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>3</div>
            <h3>Development</h3>
            <p>Build the app using modern technologies and best practices</p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>4</div>
            <h3>Launch</h3>
            <p>Deploy to app stores with optimization for visibility</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <h2>Ready to Build Your Mobile App?</h2>
        <p>Let's bring your app idea to life with our expert development team</p>
        <Link href="/GetaQuote">
          <button className={styles.primaryBtn}>Get Started</button>
        </Link>
      </section>
    </div>
    <Footer />
    </div>
  );
};

export default MobileAppDevelopmentPage;