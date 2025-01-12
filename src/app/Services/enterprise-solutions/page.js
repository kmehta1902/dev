'use client';

import {
  Database, Lock, RefreshCcw, GitBranch, BarChart, Network,
  Server, Cog, FileText, Users, Zap, Shield,
  Globe, Clock, Settings
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import Navbar from '@/app/components/Navbar/Navbar';
import Footer from '@/app/components/Footer/Footer';

const EnterpriseSolutionsPage = () => {
  const enterpriseFeatures = [
    {
      title: "Enterprise Resource Planning",
      description: "Streamline your business operations with integrated ERP solutions that connect finance, HR, supply chain, and other critical business functions.",
      icon: <Database className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Business Process Automation",
      description: "Automate repetitive tasks and complex workflows to improve efficiency, reduce errors, and free up valuable resources for strategic initiatives.",
      icon: <Cog className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Data Analytics & BI",
      description: "Transform raw data into actionable insights with advanced analytics tools, customizable dashboards, and real-time reporting capabilities.",
      icon: <BarChart className="w-8 h-8 text-blue-600" />
    },
    {
      title: "System Integration",
      description: "Seamlessly connect disparate systems and applications through APIs, middleware, and custom integration solutions.",
      icon: <Network className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Digital Transformation",
      description: "Guide your organization through digital transformation with modern technologies and innovative solutions.",
      icon: <RefreshCcw className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Enterprise Security",
      description: "Protect your business assets with comprehensive security solutions including access management, encryption, and threat monitoring.",
      icon: <Shield className="w-8 h-8 text-blue-600" />
    }
  ];

  const solutions = [
    {
      name: "ERP Solutions",
      description: "End-to-end enterprise resource planning platforms",
      features: ["Financial Management", "Supply Chain", "HR Management", "CRM Integration", "Asset Management"]
    },
    {
      name: "Business Intelligence",
      description: "Advanced analytics and reporting tools",
      features: ["Real-time Analytics", "Custom Dashboards", "Predictive Analysis", "Data Visualization"]
    },
    {
      name: "Process Automation",
      description: "Intelligent automation solutions for enterprise workflows",
      features: ["Workflow Automation", "Document Processing", "Task Management", "Process Mining"]
    },
    {
      name: "Integration Services",
      description: "Enterprise application integration solutions",
      features: ["API Management", "Middleware Solutions", "Data Integration", "Legacy System Integration"]
    }
  ];

  const businessBenefits = [
    {
      title: "Operational Efficiency",
      description: "Streamline processes and reduce operational costs through automated workflows and integrated systems.",
      metrics: ["30% reduction in processing time", "50% decrease in manual errors", "Improved resource utilization"]
    },
    {
      title: "Data-Driven Decisions",
      description: "Make informed decisions with real-time analytics and comprehensive business intelligence.",
      metrics: ["360° view of operations", "Real-time reporting", "Predictive insights"]
    },
    {
      title: "Scalable Growth",
      description: "Build a foundation for sustainable growth with flexible and scalable enterprise solutions.",
      metrics: ["Flexible architecture", "Cloud-ready solutions", "Modular deployment"]
    }
  ];

  return (
    <div>
      <Navbar />
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Enterprise Solutions</h1>
          <p>Transform your enterprise with scalable, integrated solutions designed to optimize operations and drive digital innovation</p>
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
          <Image src="/enterprise.png" alt="Enterprise Solutions" width={600} height={400} />
        </div>
      </section>

      {/* Features Grid */}
      <section className={styles.features}>
        <h2>Enterprise Capabilities</h2>
        <div className={styles.featureGrid}>
          {enterpriseFeatures.map((feature, index) => (
            <div key={index} className={styles.featureCard}>
              <div className={styles.featureIcon}>{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Solutions Stack */}
      <section className={styles.techStack}>
        <h2>Enterprise Solutions Suite</h2>
        <div className={styles.techGrid}>
          {solutions.map((solution, index) => (
            <div key={index} className={styles.techCard}>
              <h3>{solution.name}</h3>
              <p>{solution.description}</p>
              <ul className={styles.techFeatures}>
                {solution.features.map((feature, fIndex) => (
                  <li key={fIndex}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Business Benefits */}
      <section className={styles.benefits}>
        <h2>Business Impact</h2>
        <div className={styles.benefitsGrid}>
          {businessBenefits.map((benefit, index) => (
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

      {/* Implementation Process */}
      <section className={styles.process}>
        <h2>Implementation Approach</h2>
        <div className={styles.processSteps}>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>1</div>
            <h3>Discovery</h3>
            <p>Comprehensive analysis of your current enterprise architecture and business requirements</p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>2</div>
            <h3>Design</h3>
            <p>Creating detailed solution architecture and implementation roadmap</p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>3</div>
            <h3>Development</h3>
            <p>Agile implementation of solutions with continuous feedback and iteration</p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>4</div>
            <h3>Deployment</h3>
            <p>Phased rollout with comprehensive testing and user training</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <h2>Ready to Transform Your Enterprise?</h2>
        <p>Let's discuss how our enterprise solutions can drive your business forward</p>
        <Link href="/GetaQuote">
          <button className={styles.primaryBtn}>Schedule Consultation</button>
        </Link>
      </section>
    </div>
    <Footer />
    </div>
  );
};

export default EnterpriseSolutionsPage;