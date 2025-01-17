'use client';

import {
  Lightbulb, Shield, Target, ChartBar, Settings, Users,
  GitBranch, Network, Clock, Database, Lock, RefreshCcw
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import Navbar from '@/app/components/Navbar/Navbar';
import Footer from '@/app/components/Footer/Footer';
import SplashCursor from '@/app/components/Cursor/SplashCursor';

const ITConsultancyPage = () => {
  const consultingServices = [
    {
      title: "Digital Strategy",
      description: "Develop comprehensive digital transformation strategies aligned with your business objectives and market dynamics.",
      icon: <Target className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Technology Assessment",
      description: "Evaluate your current IT infrastructure, identify gaps, and recommend improvements for optimal performance.",
      icon: <ChartBar className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Security & Compliance",
      description: "Implement robust security frameworks and ensure compliance with industry regulations and standards.",
      icon: <Shield className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Process Optimization",
      description: "Streamline business processes through automation and implementation of best practices.",
      icon: <Settings className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Change Management",
      description: "Guide organizations through digital transformation with effective change management strategies.",
      icon: <RefreshCcw className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Innovation Planning",
      description: "Identify and implement emerging technologies to drive business innovation and growth.",
      icon: <Lightbulb className="w-8 h-8 text-blue-600" />
    }
  ];

  const methodologies = [
    {
      name: "Strategic Planning",
      description: "Comprehensive technology roadmap development",
      features: ["Business Analysis", "Gap Assessment", "Risk Analysis", "Technology Roadmap", "ROI Planning"]
    },
    {
      name: "Digital Transformation",
      description: "End-to-end transformation consulting",
      features: ["Process Reengineering", "Technology Selection", "Implementation Planning", "Change Management"]
    },
    {
      name: "Security & Governance",
      description: "Robust security and compliance frameworks",
      features: ["Risk Assessment", "Security Architecture", "Compliance Management", "Policy Development"]
    },
    {
      name: "Technology Solutions",
      description: "Cutting-edge technology implementation",
      features: ["Cloud Strategy", "Enterprise Architecture", "Systems Integration", "Technology Stack Optimization"]
    }
  ];

  const businessOutcomes = [
    {
      title: "Operational Excellence",
      description: "Achieve higher efficiency and reduced operational costs through optimized IT processes.",
      metrics: ["25-40% cost reduction", "Improved process efficiency", "Enhanced productivity"]
    },
    {
      title: "Risk Management",
      description: "Comprehensive risk mitigation and enhanced security posture.",
      metrics: ["Reduced security incidents", "Compliance adherence", "Business continuity"]
    },
    {
      title: "Innovation Leadership",
      description: "Stay ahead of the competition with cutting-edge technology adoption.",
      metrics: ["Faster time-to-market", "Competitive advantage", "Digital capabilities"]
    }
  ];

  return (
    <div>
      <SplashCursor />
      <Navbar />
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>IT Consultancy Services</h1>
          <p>Strategic technology consulting to drive digital transformation and optimize your IT investments</p>
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
          <Image src="/it.jpeg" alt="IT Consultancy" width={600} height={400} />
        </div>
      </section>

      {/* Services Grid */}
      <section className={styles.features}>
        <h2>Consulting Services</h2>
        <div className={styles.featureGrid}>
          {consultingServices.map((service, index) => (
            <div key={index} className={styles.featureCard}>
              <div className={styles.featureIcon}>{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Methodologies */}
      <section className={styles.techStack}>
        <h2>Our Methodologies</h2>
        <div className={styles.techGrid}>
          {methodologies.map((methodology, index) => (
            <div key={index} className={styles.techCard}>
              <h3>{methodology.name}</h3>
              <p>{methodology.description}</p>
              <ul className={styles.techFeatures}>
                {methodology.features.map((feature, fIndex) => (
                  <li key={fIndex}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Business Outcomes */}
      <section className={styles.benefits}>
        <h2>Business Outcomes</h2>
        <div className={styles.benefitsGrid}>
          {businessOutcomes.map((outcome, index) => (
            <div key={index} className={styles.benefitCard}>
              <h3>{outcome.title}</h3>
              <p>{outcome.description}</p>
              <ul className={styles.benefitMetrics}>
                {outcome.metrics.map((metric, mIndex) => (
                  <li key={mIndex}>{metric}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Consulting Process */}
      <section className={styles.process}>
        <h2>Our Consulting Process</h2>
        <div className={styles.processSteps}>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>1</div>
            <h3>Discovery</h3>
            <p>Comprehensive assessment of your current technology landscape and business objectives</p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>2</div>
            <h3>Analysis</h3>
            <p>Detailed analysis of gaps, opportunities, and potential solutions</p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>3</div>
            <h3>Strategy</h3>
            <p>Development of tailored technology roadmap and implementation plan</p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>4</div>
            <h3>Implementation</h3>
            <p>Guided execution of recommendations with continuous support</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <h2>Transform Your IT Strategy</h2>
        <p>Let's work together to optimize your technology investments and drive business growth</p>
        <Link href="/GetaQuote">
          <button className={styles.primaryBtn}>Book a Consultation</button>
        </Link>
      </section>
    </div>
    <Footer />
    </div>
  );
};

export default ITConsultancyPage;