import React from 'react';
import { motion } from 'framer-motion';
import { FaMobile, FaCode, FaDatabase, FaTools, FaPaintBrush, FaCloud } from 'react-icons/fa';
import styles from './Skills.module.css';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Mobile Development',
      icon: <FaMobile />,
      skills: [
        { name: 'Flutter', level: 95 },
        { name: 'Dart', level: 90 },
        { name: 'Mobile App Development', level: 90 },
        { name: 'Android & iOS', level: 85 },
        { name: 'UI/UX Implementation', level: 85 }
      ]
    },
    {
      category: 'Core Technologies',
      icon: <FaCode />,
      skills: [
        { name: 'Dart Programming', level: 90 },
        { name: 'API Integration', level: 88 },
        { name: 'Object-Oriented Programming', level: 85 },
        { name: 'Data Structures', level: 80 },
        { name: 'JSON', level: 90 }
      ]
    },
    {
      category: 'Backend & Database',
      icon: <FaDatabase />,
      skills: [
        { name: 'Firebase', level: 85 },
        { name: 'RESTful APIs', level: 88 },
        { name: 'Database Management', level: 80 },
        { name: 'Cloud Integration', level: 75 },
        { name: 'Data Storage', level: 85 }
      ]
    },
    {
      category: 'Tools & Platforms',
      icon: <FaTools />,
      skills: [
        { name: 'Git & GitHub', level: 90 },
        { name: 'Bitbucket', level: 80 },
        { name: 'JIRA', level: 75 },
        { name: 'VS Code', level: 95 },
        { name: 'Agile Methodology', level: 85 }
      ]
    },
    {
      category: 'UI/UX Design',
      icon: <FaPaintBrush />,
      skills: [
        { name: 'UI Development', level: 85 },
        { name: 'User Experience', level: 80 },
        { name: 'Responsive Design', level: 85 },
        { name: 'Material Design', level: 80 },
        { name: 'Widget Implementation', level: 90 }
      ]
    },
    {
      category: 'Quality & Testing',
      icon: <FaCloud />,
      skills: [
        { name: 'Debugging', level: 90 },
        { name: 'Code Review', level: 85 },
        { name: 'Testing', level: 80 },
        { name: 'Performance Optimization', level: 85 },
        { name: 'Software Testability', level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className={`section ${styles.skills}`}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="fade-in"
        >
          <h2 className="section-title">Technical Skills</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Comprehensive skills in Flutter development and mobile app technologies with 3.5+ years of professional experience.
          </p>
        </motion.div>

        <div className={styles.skillsGrid}>
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className={`card ${styles.skillCategory}`}
            >
              <div className={styles.categoryHeader}>
                <div className={styles.categoryIcon}>
                  {category.icon}
                </div>
                <h3 className={styles.categoryTitle}>{category.category}</h3>
              </div>
              <div className={styles.skillsList}>
                {category.skills.map((skill, index) => (
                  <div key={skill.name} className={styles.skillItem}>
                    <div className={styles.skillHeader}>
                      <span className={styles.skillName}>{skill.name}</span>
                      <span className={styles.skillLevel}>{skill.level}%</span>
                    </div>
                    <div className={styles.progressBar}>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className={styles.progressFill}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;