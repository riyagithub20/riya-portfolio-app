import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMobile, FaAndroid, FaApple, FaCalendarAlt, FaExternalLinkAlt, FaCode, FaPlay, FaStar, FaDownload } from 'react-icons/fa';
import styles from './Projects.module.css';

// Import project images
import jobsEducationImg from '../../assets/projects/jobsineducation.jpg';
import logistifiePassengerImg from '../../assets/projects/logistifie-passenger.jpg';
import logistifieDriverImg from '../../assets/projects/logistifie-driver.jpg';

// Fallback images if imports fail
const fallbackImages = {
  jobsEducation: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&auto=format&fit=crop',
  logistifiePassenger: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600&auto=format&fit=crop',
  logistifieDriver: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&auto=format&fit=crop'
};

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [imageErrors, setImageErrors] = useState({});

  const handleImageError = (imageKey) => {
    setImageErrors(prev => ({ ...prev, [imageKey]: true }));
  };

  const projects = [
    {
      id: 1,
      title: 'Jobs In Education',
      description: 'A comprehensive job portal application designed specifically for the education sector.',
      technologies: ['Flutter', 'Dart', 'Firebase', 'REST API'],
      duration: '3 Years',
      platforms: ['Android', 'iOS'],
      role: 'Flutter Developer',
      features: [
        'Advanced job search with multiple filtering',
        'Real-time application tracking',
        'User and employer profiles',
        'Push notifications system'
      ],
      category: 'mobile',
      image: jobsEducationImg,
      fallbackImage: fallbackImages.jobsEducation,
      imageKey: 'jobsEducation',
      status: 'Completed',
      demoLink: '#',
      githubLink: '#',
      playStoreLink: '#',
      appStoreLink: '#',
      rating: '4.5',
      downloads: '1000+'
    },
    {
      id: 2,
      title: 'Logistifie Passenger',
      description: 'Premium cab booking application offering luxury ride services with real-time tracking.',
      technologies: ['Flutter', 'Google Maps', 'Payment Gateway', 'Firebase'],
      duration: '6 Months',
      platforms: ['Android', 'iOS'],
      role: 'Flutter Developer',
      features: [
        'Instant cab booking',
        'Live GPS tracking',
        'Secure payment options',
        'Driver rating system'
      ],
      category: 'mobile',
      image: logistifiePassengerImg,
      fallbackImage: fallbackImages.logistifiePassenger,
      imageKey: 'logistifiePassenger',
      status: 'Completed',
      demoLink: '#',
      githubLink: '#',
      playStoreLink: '#',
      appStoreLink: '#',
      rating: '4.7',
      downloads: '500+'
    },
    {
      id: 3,
      title: 'Logistifie Driver',
      description: 'Companion application for cab drivers with trip management and earnings analytics.',
      technologies: ['Flutter', 'Google Maps', 'Firebase', 'Location Services'],
      duration: '6 Months',
      platforms: ['Android', 'iOS'],
      role: 'Flutter Developer',
      features: [
        'Trip management system',
        'Earnings dashboard',
        'Route optimization',
        'Performance tracking'
      ],
      category: 'mobile',
      image: logistifieDriverImg,
      fallbackImage: fallbackImages.logistifieDriver,
      imageKey: 'logistifieDriver',
      status: 'Completed',
      demoLink: '#',
      githubLink: '#',
      playStoreLink: '#',
      appStoreLink: '#',
      rating: '4.6',
      downloads: '300+'
    }
  ];

  const filters = [
    { key: 'all', label: 'All' },
    { key: 'flutter', label: 'Flutter' },
    { key: 'android', label: 'Android' },
    { key: 'ios', label: 'iOS' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => 
        filter === 'flutter' ? true :
        filter === 'android' ? project.platforms.includes('Android') :
        filter === 'ios' ? project.platforms.includes('iOS') : true
      );

  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="fade-in"
        >
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>My Work</h2>
            <p className={styles.sectionSubtitle}>
              Showcasing professional mobile applications built with Flutter for Android & iOS platforms.
            </p>
          </div>
        </motion.div>

        {/* Filter Buttons */}
        <div className={styles.filterContainer}>
          {filters.map((filterItem) => (
            <button
              key={filterItem.key}
              onClick={() => setFilter(filterItem.key)}
              className={`${styles.filterButton} ${
                filter === filterItem.key ? styles.filterButtonActive : ''
              }`}
            >
              {filterItem.label}
            </button>
          ))}
        </div>

        <div className={styles.projectsContainer}>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={styles.projectCard}
            >
              {/* Project Header */}
              <div className={styles.projectHeader}>
                <div className={styles.projectIcon}>
                  <FaMobile />
                </div>
                <div className={styles.projectTitleContainer}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <div className={styles.projectMeta}>
                    <span className={styles.projectRole}>{project.role}</span>
                    <span className={styles.projectDuration}>
                      <FaCalendarAlt /> {project.duration}
                    </span>
                  </div>
                </div>
              </div>

              {/* Project Image */}
              <div className={styles.projectImageWrapper}>
                <img 
                  src={imageErrors[project.imageKey] ? project.fallbackImage : project.image} 
                  alt={project.title}
                  className={styles.projectImage}
                  onError={() => handleImageError(project.imageKey)}
                />
                <div className={styles.projectStatus}>
                  {project.status}
                </div>
              </div>

              {/* Project Description */}
              <p className={styles.projectDescription}>{project.description}</p>

              {/* Project Stats */}
              <div className={styles.projectStats}>
                {project.rating && (
                  <div className={styles.statItem}>
                    <FaStar className={styles.statIcon} />
                    <span className={styles.statValue}>{project.rating}</span>
                    <span className={styles.statLabel}>Rating</span>
                  </div>
                )}
                {project.downloads && (
                  <div className={styles.statItem}>
                    <FaDownload className={styles.statIcon} />
                    <span className={styles.statValue}>{project.downloads}</span>
                    <span className={styles.statLabel}>Downloads</span>
                  </div>
                )}
              </div>

              {/* Technologies */}
              <div className={styles.techStack}>
                <div className={styles.techHeader}>
                  <FaCode className={styles.techIcon} />
                  <h4 className={styles.techTitle}>Technologies</h4>
                </div>
                <div className={styles.techList}>
                  {project.technologies.map((tech) => (
                    <span key={tech} className={styles.techTag}>{tech}</span>
                  ))}
                </div>
              </div>

              {/* Platforms */}
              <div className={styles.platforms}>
                <div className={styles.platformsHeader}>
                  <h4 className={styles.platformsTitle}>Available On</h4>
                </div>
                <div className={styles.platformIcons}>
                  {project.platforms.map((platform) => (
                    <div key={platform} className={styles.platformItem}>
                      {platform === 'Android' ? (
                        <FaAndroid className={styles.platformIcon} />
                      ) : (
                        <FaApple className={styles.platformIcon} />
                      )}
                      <span className={styles.platformName}>{platform}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className={styles.features}>
                <h4 className={styles.featuresTitle}>Key Features</h4>
                <ul className={styles.featuresList}>
                  {project.features.map((feature, idx) => (
                    <li key={idx} className={styles.featureItem}>{feature}</li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className={styles.actionButtons}>
                <a 
                  href={project.demoLink}
                  className={styles.demoButton}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaPlay className={styles.buttonIcon} />
                  Live Demo
                </a>
                <a 
                  href={project.githubLink}
                  className={styles.projectButton}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt className={styles.buttonIcon} />
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;