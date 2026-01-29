import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaDownload } from 'react-icons/fa';
import styles from './Hero.module.css';

import profileImage from '../../assets/riya.jpg';

const Hero = () => {
  const [imgError, setImgError] = useState(false);
  const socialLinks = [
    { icon: <FaGithub />, href: '#', label: 'GitHub' },
    { icon: <FaLinkedin />, href: 'https://linkedin.com/in/riya-mandal-33a13411a', label: 'LinkedIn' },
    { icon: <FaTwitter />, href: '#', label: 'Twitter' },
    { icon: <FaEnvelope />, href: 'mailto:riyamandal4u@gmail.com', label: 'Email' },
  ];

  const handleImageError = () => {
    setImgError(true);
  };

  return (
    <section id="home" className={styles.hero}>
      <div className="container">
        <div className={styles.heroContent}>
          <motion.div 
            className={styles.heroText}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className={styles.heroTitle}>
              Hi, I'm <span className={styles.heroHighlight}>Riya Mandal</span>
            </h1>
            <h2 className={styles.heroSubtitle}>
              Flutter Developer & Mobile App Specialist
            </h2>
            <p className={styles.heroDescription}>
              With 3.5+ years of experience in Flutter development, I create high-performance 
              mobile applications for Android & iOS. Passionate about clean code, 
              user-centered design, and staying updated with the latest mobile development trends.
            </p>
            
            <div className={styles.heroInfo}>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Experience:</span>
                <span className={styles.infoValue}>3.5+ Years</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Location:</span>
                <span className={styles.infoValue}>Siliguri, India</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Email:</span>
                <span className={styles.infoValue}>riyamandal4u@gmail.com</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Phone:</span>
                <span className={styles.infoValue}>+91-9903272075</span>
              </div>
            </div>
            
            <div className={styles.heroButtons}>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className={`btn ${styles.primaryBtn}`}
              >
                Get In Touch
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className={`btn ${styles.outlineBtn}`}
              >
                View Projects
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/Resume_RIYA.pdf"
                download
                className={`btn ${styles.downloadBtn}`}
              >
                <FaDownload className={styles.downloadIcon} />
                Download Resume
              </motion.a>
            </div>

            <div className={styles.socialLinks}>
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className={styles.heroImage}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className={styles.imageContainer}>
              <img 
                src={imgError ? 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400' : profileImage}
                alt="Riya Mandal - Flutter Developer" 
                className={styles.profileImage}
                onError={handleImageError}
              />
              <div className={styles.imageOverlay}></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;