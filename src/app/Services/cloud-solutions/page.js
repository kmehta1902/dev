'use client';
import { 
  Cloud, Shield, Zap, Scale, Server, Database, 
  Globe, Lock, Clock, Cpu, Settings, Users,
  BarChart, Cloud as CloudIcon, GitBranch
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import Navbar from '@/app/components/Navbar/Navbar';
import Footer from '@/app/components/Footer/Footer';
import SplashCursor from '@/app/components/Cursor/SplashCursor';

const CloudSolutionsPage = () => {
  const cloudFeatures = [
    {
      title: "Cloud Migration",
      description: "Expert assistance in moving your applications, databases, and workloads to the cloud with minimal disruption to your business operations.",
      icon: <Cloud className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Cloud Infrastructure",
      description: "Build and manage scalable cloud infrastructure using industry best practices and automated deployment pipelines.",
      icon: <Server className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Cloud Security",
      description: "Implement robust security measures including encryption, access controls, and compliance monitoring to protect your cloud assets.",
      icon: <Shield className="w-8 h-8 text-blue-600" />
    },
    {
      title: "DevOps Integration",
      description: "Streamline development workflows with CI/CD pipelines, infrastructure as code, and automated testing.",
      icon: <GitBranch className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Performance Optimization",
      description: "Fine-tune your cloud resources for optimal performance and cost efficiency using advanced monitoring tools.",
      icon: <Zap className="w-8 h-8 text-blue-600" />
    },
    {
      title: "24/7 Monitoring",
      description: "Round-the-clock monitoring and support to ensure your cloud infrastructure runs smoothly and securely.",
      icon: <Clock className="w-8 h-8 text-blue-600" />
    }
  ];

  const technologies = [
    {
      name: "Amazon Web Services",
      description: "Market-leading cloud platform offering 200+ fully featured services",
      features: ["EC2", "S3", "Lambda", "RDS", "CloudFront"]
    },
    {
      name: "Microsoft Azure",
      description: "Enterprise-grade cloud computing platform with hybrid capabilities",
      features: ["Azure VMs", "Azure Functions", "CosmosDB", "Azure DevOps"]
    },
    {
      name: "Google Cloud Platform",
      description: "Cutting-edge cloud services with strong AI/ML capabilities",
      features: ["Compute Engine", "Cloud Storage", "BigQuery", "Kubernetes"]
    },
    {
      name: "DevOps Tools",
      description: "Industry-standard tools for automation and deployment",
      features: ["Docker", "Kubernetes", "Terraform", "Jenkins", "GitLab"]
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
          <h1>Enterprise Cloud Solutions</h1>
          <p>Transform your business with scalable, secure, and efficient cloud computing solutions tailored to your needs</p>
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
          <Image src="/cs.jpg" alt="Cloud Infrastructure" width={600} height={400} />
        </div>
      </section>

      {/* Features Grid */}
      <section className={styles.features}>
        <h2>Comprehensive Cloud Services</h2>
        <div className={styles.featureGrid}>
          {cloudFeatures.map((feature, index) => (
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
        <h2>Cloud Technologies & Platforms</h2>
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
        <h2>Our Cloud Implementation Process</h2>
        <div className={styles.processSteps}>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>1</div>
            <h3>Assessment</h3>
            <p>Thorough analysis of your current infrastructure, requirements, and business goals</p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>2</div>
            <h3>Strategy</h3>
            <p>Developing a comprehensive migration plan and selecting optimal cloud services</p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>3</div>
            <h3>Implementation</h3>
            <p>Systematic migration and setup of cloud infrastructure with minimal disruption</p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>4</div>
            <h3>Optimization</h3>
            <p>Fine-tuning performance and implementing cost optimization measures</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <h2>Ready to Move to the Cloud?</h2>
        <p>Let's discuss how our cloud solutions can help your business grow</p>
        <Link href="/GetaQuote">
          <button className={styles.primaryBtn}>Get Started</button>
        </Link>
      </section>
    </div>
    <Footer />
    </div>
  );
};

export default CloudSolutionsPage;