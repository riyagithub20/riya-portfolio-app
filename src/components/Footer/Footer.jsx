import React from 'react';
import { FaHeart, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: 'Email',
      value: 'riyamandal4u@gmail.com',
      href: 'mailto:riyamandal4u@gmail.com'
    },
    {
      icon: <FaPhone />,
      label: 'Phone',
      value: '+91 99032 72075',
      href: 'tel:+919903272075'
    },
    {
      icon: <FaMapMarkerAlt />,
      label: 'Location',
      value: 'Siliguri, West Bengal, India',
      href: 'https://maps.google.com/?q=Siliguri'
    }
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/riya-mandal-33a13411a',
      color: '#0077B5'
    },
    {
      icon: <FaGithub />,
      label: 'GitHub',
      href: '#',
      color: '#333'
    }
  ];

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <footer className={styles.footer}>
      <div className="container">
        {/* Top Section */}
        <div className={styles.footerTop}>
          <div className={styles.footerInfo}>
            <h3 className={styles.footerLogo}>Riya Mandal</h3>
            <p className={styles.footerTagline}>
              Flutter Developer & Mobile App Specialist
            </p>
            <p className={styles.footerDescription}>
              Creating high-performance mobile applications for Android & iOS with 3.5+ years of Flutter experience.
            </p>
            
            <div className={styles.socialLinks}>
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label={link.label}
                  style={{ backgroundColor: link.color }}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div className={styles.footerLinks}>
            <h4 className={styles.linksTitle}>Quick Links</h4>
            <ul className={styles.linksList}>
              {quickLinks.map((link) => (
                <li key={link.label} className={styles.linkItem}>
                  <a href={link.href} className={styles.link}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.footerContact}>
            <h4 className={styles.contactTitle}>Contact Info</h4>
            <div className={styles.contactList}>
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  className={styles.contactItem}
                  target={info.label === 'Location' ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                >
                  <div className={styles.contactIcon}>
                    {info.icon}
                  </div>
                  <div className={styles.contactContent}>
                    <span className={styles.contactLabel}>{info.label}</span>
                    <span className={styles.contactValue}>{info.value}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className={styles.footerDivider}></div>

        {/* Bottom Section */}
        <div className={styles.footerBottom}>
          <div className={styles.copyright}>
            <p>© {currentYear} Riya Mandal. All rights reserved.</p>
            <p className={styles.madeWith}>
              Built with <FaHeart className={styles.heartIcon} /> using React & Framer Motion
            </p>
          </div>
          
          <div className={styles.ctaSection}>
            <p className={styles.ctaText}>Ready to build your next mobile app?</p>
            <a
              href="#contact"
              className={styles.ctaButton}
            >
              Let's Connect
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;