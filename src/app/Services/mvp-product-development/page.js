'use client';

import { 
  Rocket, Gauge, Layers, Monitor, Code, 
  Target, Users, Zap, Clock, CheckCircle,
  GitBranch, Database, Server
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import Navbar from '@/app/components/Navbar/Navbar';
import Footer from '@/app/components/Footer/Footer';
import SplashCursor from '@/app/components/Cursor/SplashCursor';

const MvpDevelopmentPage = () => {
  const mvpFeatures = [
    {
      title: "Rapid Prototyping",
      description: "Transform your ideas into functional prototypes quickly using modern development frameworks and agile methodologies.",
      icon: <Rocket className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Iterative Development",
      description: "Embrace an agile approach to deliver core features quickly while maintaining flexibility for future improvements.",
      icon: <GitBranch className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Cost-Effective Solutions",
      description: "Focus on essential features to minimize initial development costs while maximizing business value.",
      icon: <Gauge className="w-8 h-8 text-blue-600" />
    },
    {
      title: "User-Centric Design",
      description: "Create intuitive interfaces and smooth user experiences that keep your early adopters engaged.",
      icon: <Users className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Scalable Architecture",
      description: "Build on a foundation that can grow with your success, using modern cloud-native technologies.",
      icon: <Layers className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Continuous Integration",
      description: "Implement automated testing and deployment pipelines for reliable, consistent delivery.",
      icon: <CheckCircle className="w-8 h-8 text-blue-600" />
    }
  ];

  const technologies = [
    {
      name: "Frontend Development",
      description: "Modern, responsive user interfaces",
      features: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS"]
    },
    {
      name: "Backend Development",
      description: "Scalable server-side solutions",
      features: ["Node.js", "Python", "Go", "Ruby on Rails", "GraphQL"]
    },
    {
      name: "Database Solutions",
      description: "Flexible data storage options",
      features: ["MongoDB", "PostgreSQL", "Redis", "Firebase", "MySQL"]
    },
    {
      name: "DevOps & Infrastructure",
      description: "Reliable deployment and scaling",
      features: ["Docker", "Kubernetes", "AWS", "GitHub Actions", "Vercel"]
    }
  ];

  const businessBenefits = [
    {
      title: "Faster Time to Market",
      description: "Launch your product quickly and start gathering real user feedback",
      icon: <Clock className="w-12 h-12 text-blue-600" />
    },
    {
      title: "Risk Mitigation",
      description: "Validate your concept before significant investment",
      icon: <Target className="w-12 h-12 text-blue-600" />
    },
    {
      title: "Cost Optimization",
      description: "Focus resources on features that matter most to users",
      icon: <Gauge className="w-12 h-12 text-blue-600" />
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
          <h1>MVP Development Services</h1>
          <p>Transform your vision into reality with our rapid MVP development approach. We help startups and enterprises validate ideas quickly and cost-effectively.</p>
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
          <Image src="/mvp.webp" alt="MVP Development Process" width={600} height={400} />
        </div>
      </section>

      {/* Features Grid */}
      <section className={styles.features}>
        <h2>MVP Development Features</h2>
        <div className={styles.featureGrid}>
          {mvpFeatures.map((feature, index) => (
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
        <h2>Development Stack</h2>
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

      {/* Business Benefits */}
      <section className={styles.benefits}>
        <h2>Business Benefits</h2>
        <div className={styles.benefitsGrid}>
          {businessBenefits.map((benefit, index) => (
            <div key={index} className={styles.benefitCard}>
              <div className={styles.benefitIcon}>{benefit.icon}</div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className={styles.process}>
        <h2>MVP Development Process</h2>
        <div className={styles.processSteps}>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>1</div>
            <h3>Discovery</h3>
            <p>Define core features and target audience through detailed analysis</p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>2</div>
            <h3>Design</h3>
            <p>Create user-friendly interfaces and optimal technical architecture</p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>3</div>
            <h3>Development</h3>
            <p>Build core features using agile methodology and latest technologies</p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>4</div>
            <h3>Launch</h3>
            <p>Deploy MVP and gather user feedback for future iterations</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <h2>Ready to Build Your MVP?</h2>
        <p>Let's turn your idea into a market-ready product</p>
        <Link href="/GetaQuote">
          <button className={styles.primaryBtn}>Get Started</button>
        </Link>
      </section>
    </div>
    <Footer />
    </div>
  );
};

export default MvpDevelopmentPage;