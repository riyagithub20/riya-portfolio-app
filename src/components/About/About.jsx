import React from 'react';
import { motion } from 'framer-motion';
import {FaGraduationCap, FaLanguage } from 'react-icons/fa';
import styles from './About.module.css';

const About = () => {
  const education = [
    {
      degree: 'MCA | Computers',
      institution: 'Heritage Institute of Technology',
      year: '2021',
      grade: 'Grade: 8.4/10'
    },
    {
      degree: 'B.Sc | General',
      institution: 'Calcutta University',
      year: '2017',
      grade: 'Marks: 61.6%'
    },
    {
      degree: '12th CBSE, English',
      institution: 'CBSE Board',
      year: '2012',
      grade: 'Marks: 60-64.9%'
    },
    {
      degree: '10th CBSE, English',
      institution: 'CBSE Board',
      year: '2010',
      grade: 'Marks: 90-94.9%'
    }
  ];

  const languages = [
    { name: 'English', level: 'Fluent' },
    { name: 'Bengali', level: 'Native' },
    { name: 'Hindi', level: 'Fluent' }
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="fade-in"
        >
          <h2 className="section-title">About Me</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Experienced Flutter Developer with 3.5+ years of expertise in building high-performance mobile applications for Android & iOS platforms.
          </p>
        </motion.div>

        <div className={styles.aboutContent}>
          <motion.div 
            className={styles.aboutText}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className={styles.aboutTextTitle}>Professional Journey</h3>
            <p className={styles.aboutTextParagraph}>
              I am an experienced Flutter Developer who has successfully completed projects like 
              Jobs In Education app, Logistifie passenger app, and Logistifie Driver app for 
              Android & iOS platforms. With 3.5 years of work experience, I excel in Dart and 
              Flutter, ensuring high-performance mobile applications.
            </p>
            <p className={styles.aboutTextParagraph}>
              Skilled in UI/UX design, I have integrated external APIs, conducted code reviews, 
              and stayed updated with the latest mobile app development trends. Proficient in 
              Flutter, Dart and Firebase, I bring expertise in software debugging, code review, 
              and software testability.
            </p>
            
            <div className={styles.experienceStats}>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>3.5+</div>
                <div className={styles.statLabel}>Years Experience</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>5+</div>
                <div className={styles.statLabel}>Projects Completed</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>2</div>
                <div className={styles.statLabel}>Companies</div>
              </div>
            </div>
          </motion.div>

          <div className={styles.sideContent}>
            {/* Education */}
            <div className={`card ${styles.educationCard}`}>
              <div className={styles.sectionHeader}>
                <FaGraduationCap className={styles.sectionIcon} />
                <h4 className={styles.sectionTitle}>Education</h4>
              </div>
              <div className={styles.educationList}>
                {education.map((edu, index) => (
                  <div key={index} className={styles.educationItem}>
                    <div className={styles.educationDegree}>{edu.degree}</div>
                    <div className={styles.educationInstitution}>{edu.institution}</div>
                    <div className={styles.educationDetails}>
                      <span className={styles.educationYear}>{edu.year}</span>
                      <span className={styles.educationGrade}>{edu.grade}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className={`card ${styles.languagesCard}`}>
              <div className={styles.sectionHeader}>
                <FaLanguage className={styles.sectionIcon} />
                <h4 className={styles.sectionTitle}>Languages</h4>
              </div>
              <div className={styles.languagesList}>
                {languages.map((lang, index) => (
                  <div key={index} className={styles.languageItem}>
                    <span className={styles.languageName}>{lang.name}</span>
                    <span className={styles.languageLevel}>{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;