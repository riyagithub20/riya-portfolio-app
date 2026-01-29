import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaMobile, FaCode, FaCalendar } from 'react-icons/fa';
import styles from './Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setSubmitSuccess(true);
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 3 seconds
      setTimeout(() => setSubmitSuccess(false), 3000);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      info: 'riyamandal4u@gmail.com',
      link: 'mailto:riyamandal4u@gmail.com'
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      info: '+91 99032 72075',
      link: 'tel:+919903272075'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      info: 'Siliguri, West Bengal, India',
      link: 'https://maps.google.com/?q=Siliguri+West+Bengal'
    }
  ];

  const expertiseAreas = [
    {
      icon: <FaMobile />,
      title: 'Mobile App Development',
      description: 'Cross-platform apps for Android & iOS using Flutter'
    },
    {
      icon: <FaCode />,
      title: 'Custom Solutions',
      description: 'Tailored mobile applications for your specific needs'
    },
    {
      icon: <FaCalendar />,
      title: 'Project Consultation',
      description: 'Planning and strategy for your mobile app projects'
    }
  ];

  return (
    <section id="contact" className={`section ${styles.contact}`}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="fade-in"
        >
          <h2 className="section-title">Let's Connect</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Have a mobile app idea or looking for a Flutter Developer? Let's discuss how we can bring your vision to life!
          </p>
        </motion.div>

        <div className={styles.contactContent}>
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={styles.contactInfo}
          >
            <h3 className={styles.contactInfoTitle}>Get In Touch</h3>
            
            <div className={styles.contactInfoList}>
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  href={item.link}
                  className={styles.contactInfoItem}
                  target={item.title === 'Location' ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                >
                  <div className={styles.contactInfoIcon}>
                    {item.icon}
                  </div>
                  <div className={styles.contactInfoContent}>
                    <h4 className={styles.contactInfoSubtitle}>{item.title}</h4>
                    <p className={styles.contactInfoText}>{item.info}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Expertise Areas */}
            <div className={styles.expertise}>
              <h4 className={styles.expertiseTitle}>I Can Help With:</h4>
              <div className={styles.expertiseList}>
                {expertiseAreas.map((area, index) => (
                  <div key={area.title} className={styles.expertiseItem}>
                    <div className={styles.expertiseIcon}>
                      {area.icon}
                    </div>
                    <div className={styles.expertiseContent}>
                      <h5 className={styles.expertiseItemTitle}>{area.title}</h5>
                      <p className={styles.expertiseDescription}>{area.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Response Time */}
            <div className={styles.responseTime}>
              <div className={styles.responseIcon}>
                <FaPaperPlane />
              </div>
              <div className={styles.responseContent}>
                <h4 className={styles.responseTitle}>Quick Response</h4>
                <p className={styles.responseText}>I typically respond within 24 hours</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={styles.contactFormWrapper}
          >
            <form onSubmit={handleSubmit} className={styles.contactForm}>
              <div className={styles.formHeader}>
                <h3 className={styles.formTitle}>Send a Message</h3>
                <p className={styles.formSubtitle}>
                  Tell me about your project or inquiry. I'll get back to you soon!
                </p>
              </div>
              
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel} htmlFor="name">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={styles.formInput}
                    placeholder="Enter your name"
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel} htmlFor="email">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={styles.formInput}
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="subject">
                  Project Type
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={styles.formInput}
                >
                  <option value="">Select a project type</option>
                  <option value="Mobile App Development">Mobile App Development</option>
                  <option value="Flutter Consultation">Flutter Consultation</option>
                  <option value="App Maintenance">App Maintenance</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="message">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className={`${styles.formInput} ${styles.formTextarea}`}
                  placeholder="Describe your project, timeline, and any specific requirements..."
                />
              </div>

              <div className={styles.formFooter}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  disabled={isSubmitting}
                  className={`${styles.submitButton} ${isSubmitting ? styles.submitting : ''}`}
                >
                  <FaPaperPlane className={styles.buttonIcon} />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>
                
                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={styles.successMessage}
                  >
                    ✅ Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;