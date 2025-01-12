'use client';

import React from 'react';
import { 
  PenTool, 
  Palette, 
  Monitor, 
  Layout, 
  Eye, 
  Smartphone, 
  Users, 
  Code,
  Figma,
  Layers,
  MousePointer,
  Target,
  Compass,
  PencilRuler,
  Zap,
  ShieldCheck,
  Bot,
  Search,
  Repeat,
  Award
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import Navbar from '@/app/components/Navbar/Navbar';
import Footer from '@/app/components/Footer/Footer';

const UiUxDesignPage = () => {
  const designFeatures = [
    {
      title: "User Research & Analysis",
      description: "Comprehensive user research including interviews, surveys, and behavioral analysis to understand user needs, pain points, and opportunities for innovation.",
      icon: <Users className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Information Architecture",
      description: "Strategic organization of content and data structures to create intuitive navigation and user flows that enhance findability and reduce cognitive load.",
      icon: <Compass className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Wireframing & Prototyping",
      description: "Dynamic prototypes and detailed wireframes that visualize user journeys, test interactions, and validate design concepts before development.",
      icon: <PenTool className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Visual Design & Branding",
      description: "Creating stunning visual designs that align with your brand identity while ensuring accessibility and emotional connection with users.",
      icon: <Palette className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Responsive & Adaptive Design",
      description: "Cross-platform design solutions that provide seamless experiences across desktop, tablet, mobile, and emerging platforms.",
      icon: <Smartphone className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Interaction Design",
      description: "Crafting meaningful micro-interactions and animations that provide feedback and delight users while improving usability.",
      icon: <MousePointer className="w-8 h-8 text-blue-600" />
    }
  ];

  const technologies = [
    {
      name: "Design & Prototyping",
      description: "Industry-leading tools for creation and iteration",
      features: ["Figma", "Adobe XD", "Sketch", "InVision", "Principle", "Framer", "ProtoPie"]
    },
    {
      name: "Development Handoff",
      description: "Seamless design-to-development workflow",
      features: ["Zeplin", "Abstract", "Avocode", "Inspect", "Design Tokens", "Style Dictionary"]
    },
    {
      name: "Research & Testing",
      description: "Comprehensive user testing and analytics suite",
      features: ["UserTesting", "Hotjar", "Optimal Workshop", "Lookback", "Maze", "FullStory"]
    },
    {
      name: "Design Systems",
      description: "Tools for building and maintaining design systems",
      features: ["Storybook", "Zeroheight", "DSM", "Toolabs", "Style Guide", "Pattern Lab"]
    }
  ];

  const expertise = [
    {
      title: "Accessibility Design",
      description: "WCAG 2.1 compliant designs ensuring digital inclusion",
      icon: <ShieldCheck className="w-8 h-8 text-blue-600" />
    },
    {
      title: "UX Strategy",
      description: "Strategic approach to achieving business goals through user experience",
      icon: <Target className="w-8 h-8 text-blue-600" />
    },
    {
      title: "AI-Driven Design",
      description: "Incorporating AI and ML capabilities into user interfaces",
      icon: <Bot className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Performance Optimization",
      description: "Optimizing designs for speed and efficiency",
      icon: <Zap className="w-8 h-8 text-blue-600" />
    }
  ];

  const processSteps = [
    {
      title: "Discovery & Research",
      description: "Understanding your business goals, user needs, and market opportunities through comprehensive research and analysis.",
      subSteps: ["Stakeholder Interviews", "User Research", "Competitor Analysis", "Market Research"]
    },
    {
      title: "Strategy & Planning",
      description: "Developing a clear roadmap for design success with defined metrics and objectives.",
      subSteps: ["UX Strategy", "Information Architecture", "User Flows", "Content Strategy"]
    },
    {
      title: "Design & Iteration",
      description: "Creating and refining designs through an iterative process with continuous feedback.",
      subSteps: ["Wireframing", "Visual Design", "Prototyping", "Design Systems"]
    },
    {
      title: "Testing & Validation",
      description: "Ensuring designs meet user needs and business goals through comprehensive testing.",
      subSteps: ["Usability Testing", "A/B Testing", "Accessibility Testing", "Performance Testing"]
    },
    // {
    //   title: "Implementation & Launch",
    //   description: "Supporting the development team and ensuring successful design implementation.",
    //   subSteps: ["Developer Handoff", "Quality Assurance", "Launch Support", "Performance Monitoring"]
    // }
  ];

  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1>UI/UX Design Excellence</h1>
            <p>Transform your digital presence with user-centered design solutions that combine cutting-edge aesthetics with seamless functionality. We create exceptional experiences that drive engagement, satisfaction, and business growth.</p>
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
            <Image src="/images.jpeg" alt="UI/UX Design Excellence" width={600} height={400} />
          </div>
        </section>

        {/* Features Grid */}
        <section className={styles.features}>
          <h2>Comprehensive Design Services</h2>
          <div className={styles.featureGrid}>
            {designFeatures.map((feature, index) => (
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
          <h2>Our Design Expertise</h2>
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
          <h2>Tools & Technologies</h2>
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
          <h2>Our Design Process</h2>
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

        {/* Stats Section */}
        {/* <section className={styles.stats}>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <h3>98%</h3>
              <p>Client Satisfaction Rate</p>
            </div>
            <div className={styles.statCard}>
              <h3>250+</h3>
              <p>Projects Completed</p>
            </div>
            <div className={styles.statCard}>
              <h3>40%</h3>
              <p>Average Conversion Increase</p>
            </div>
            <div className={styles.statCard}>
              <h3>15+</h3>
              <p>Design Awards</p>
            </div>
          </div>
        </section> */}

        {/* CTA Section */}
        <section className={styles.cta}>
          <h2>Ready to Transform Your Digital Experience?</h2>
          <p>Let's create designs that inspire, engage, and deliver measurable results</p>
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

export default UiUxDesignPage;