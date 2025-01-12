'use client';
import { useEffect,useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Testimonials from '../../components/Testimonials/Testimonials';
import QuoteForm from '../../components/QuoteForm/QuoteForm';
import ContactForm from '../../components/ContactForm/ContactForm';
import Footer from '../../components/Footer/Footer';
import SplashCursor from '../../components/Cursor/SplashCursor';
import Blog from '../../components/Blog/Blog'
import styles from './page.module.css'
import Image from 'next/image';

export default function Home() {

    const [selectedDepartment, setSelectedDepartment] = useState('all');
    const [selectedLocation, setSelectedLocation] = useState('all');
  
    const departments = [
      { id: 'all', name: 'All Departments' },
      { id: 'engineering', name: 'Engineering' },
      { id: 'design', name: 'Design' },
      { id: 'product', name: 'Product' },
      { id: 'sales', name: 'Sales' },
      { id: 'marketing', name: 'Marketing' }
    ];
  
    const locations = [
      { id: 'all', name: 'All Locations' },
      { id: 'ny', name: 'New York' },
      { id: 'sf', name: 'San Francisco' },
      { id: 'london', name: 'London' },
      { id: 'remote', name: 'Remote' }
    ];
  
    const jobs = [
      {
        id: 1,
        title: 'Senior Full Stack Developer',
        department: 'engineering',
        location: 'ny',
        type: 'Full-time',
        experience: '5+ years',
        salary: '$120k - $180k',
        posted: '2024-01-05',
        description: 'Looking for an experienced full-stack developer to join our engineering team...'
      },
      {
        id: 2,
        title: 'UX/UI Designer',
        department: 'design',
        location: 'sf',
        type: 'Full-time',
        experience: '3+ years',
        salary: '$90k - $130k',
        posted: '2024-01-08',
        description: 'Join our design team to create beautiful and intuitive user experiences...'
      },
      {
        id: 3,
        title: 'Product Manager',
        department: 'product',
        location: 'remote',
        type: 'Full-time',
        experience: '4+ years',
        salary: '$110k - $160k',
        posted: '2024-01-10',
        description: 'Seeking an experienced product manager to lead product strategy and execution...'
      },
      {
        id: 4,
        title: 'Sales Director',
        department: 'sales',
        location: 'london',
        type: 'Full-time',
        experience: '7+ years',
        salary: '£80k - £120k',
        posted: '2024-01-12',
        description: 'Looking for a sales leader to drive business growth in the European market...'
      },
      {
        id: 5,
        title: 'Marketing Manager',
        department: 'marketing',
        location: 'remote',
        type: 'Full-time',
        experience: '5+ years',
        salary: '$90k - $140k',
        posted: '2024-01-15',
        description: 'Join our marketing team to develop and execute compelling campaigns...'
      }
    ];
  
    const benefits = [
      {
        icon: '🏥',
        title: 'Health & Wellness',
        description: 'Comprehensive medical, dental, and vision coverage for you and your family'
      },
      {
        icon: '💰',
        title: 'Competitive Compensation',
        description: 'Above-market salary with equity options and annual bonuses'
      },
      {
        icon: '🌴',
        title: 'Flexible PTO',
        description: 'Unlimited paid time off and flexible work arrangements'
      },
      {
        icon: '📚',
        title: 'Learning & Development',
        description: '$5,000 annual budget for professional development and training'
      }
    ];
  
    const values = [
      {
        title: 'Innovation First',
        description: 'We embrace new ideas and technologies to solve complex problems'
      },
      {
        title: 'Customer Obsession',
        description: 'Our customers are at the heart of everything we do'
      },
      {
        title: 'Diversity & Inclusion',
        description: 'We celebrate diversity and create an inclusive environment for all'
      },
      {
        title: 'Continuous Growth',
        description: 'We believe in continuous learning and personal development'
      }
    ];
  
    const filteredJobs = jobs.filter(job => {
      const matchesDepartment = selectedDepartment === 'all' || job.department === selectedDepartment;
      const matchesLocation = selectedLocation === 'all' || job.location === selectedLocation;
      return matchesDepartment && matchesLocation;
    });
  

    return (
        <div>

            <main>
                <Navbar />
                {/* <SplashCursor /> */}


                <div className={styles.pageContainer}>
      <section className={styles.hero}>
        <h1>Join Our Team</h1>
        <p>Build the future of technology with us</p>
        <img 
          src="/team-working-together.jpg" 
          alt="Team working together" 
          className={styles.heroImage}
        />
      </section>

      <section className={styles.values}>
        <h2>Our Values</h2>
        <div className={styles.valuesGrid}>
          {values.map((value, index) => (
            <div key={index} className={styles.valueCard}>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.benefits}>
        <h2>Benefits & Perks</h2>
        <div className={styles.benefitsGrid}>
          {benefits.map((benefit, index) => (
            <div key={index} className={styles.benefitCard}>
              <span className={styles.benefitIcon}>{benefit.icon}</span>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.openPositions}>
        <h2>Open Positions</h2>
        <div className={styles.filters}>
          <select
            value={selectedDepartment}
            onChange={(e) => setSelectedDepartment(e.target.value)}
            className={styles.filter}
          >
            {departments.map(dept => (
              <option key={dept.id} value={dept.id}>{dept.name}</option>
            ))}
          </select>

          <select
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            className={styles.filter}
          >
            {locations.map(loc => (
              <option key={loc.id} value={loc.id}>{loc.name}</option>
            ))}
          </select>
        </div>

        <div className={styles.jobsGrid}>
          {filteredJobs.map(job => (
            <div key={job.id} className={styles.jobCard}>
              <div className={styles.jobHeader}>
                <h3>{job.title}</h3>
                <span className={styles.jobType}>{job.type}</span>
              </div>
              <div className={styles.jobDetails}>
                <p>
                  <strong>Department:</strong> {departments.find(d => d.id === job.department)?.name}
                </p>
                <p>
                  <strong>Location:</strong> {locations.find(l => l.id === job.location)?.name}
                </p>
                <p>
                  <strong>Experience:</strong> {job.experience}
                </p>
                <p>
                  <strong>Salary Range:</strong> {job.salary}
                </p>
              </div>
              <p className={styles.jobDescription}>{job.description}</p>
              <div className={styles.jobFooter}>
                <span className={styles.postDate}>Posted: {job.posted}</span>
                <button className={styles.applyButton}>Apply Now</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.joinUs}>
        <h2>Why Join Us?</h2>
        <div className={styles.joinUsContent}>
          <div className={styles.joinUsText}>
            <p>Join a team of passionate individuals working on cutting-edge technology solutions. We offer:</p>
            <ul>
              <li>Opportunity to work on challenging projects</li>
              <li>Collaborative and innovative environment</li>
              <li>Career growth and development</li>
              <li>Work-life balance</li>
            </ul>
          </div>
          <Image
            src="/work-culture.jpg" 
            alt="Office culture" 
            width={400}
            height={400}
            className={styles.joinUsImage}
          />
        </div>
      </section>
    </div>
                <Testimonials />
                <Blog />
                <QuoteForm />
                <ContactForm />
            </main>

            <Footer />
        </div>
    );
}
