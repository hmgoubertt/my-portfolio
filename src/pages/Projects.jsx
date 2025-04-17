import backgroundImage from '../assets/background.jpg';
import { motion } from 'framer-motion';

function Projects() {
  const containerStyle = {
    padding: '2rem',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    color: '#FFFFFF',
    minHeight: '100vh',
    textShadow: '0 0 10px rgba(0, 0, 0, 0.7)',
  };

  const sectionStyle = {
    marginBottom: '2rem',
  };

  return (
    <>
      <style>{`
        .project-link {
          color: #C0FF00;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .project-link:hover {
          color: #00B6B4;
        }
      `}</style>

      <motion.div
        style={containerStyle}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        <motion.h1
          style={{ color: '#C0FF00', marginBottom: '2rem' }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h1>

        <motion.div
          style={sectionStyle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2>Watercolor</h2>
          <p>
            <a
              href="https://www.artstation.com/artwork/VJ6V0g"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project
            </a>
          </p>
        </motion.div>

        <motion.div
          style={sectionStyle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2>Digital Art</h2>
          <p>
            <a
              href="https://www.artstation.com/artwork/ArV89e"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project
            </a>
          </p>
        </motion.div>

        <motion.div
          style={sectionStyle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2>Digital Collage</h2>
          <p>
            <a
              href="https://www.artstation.com/artwork/blo46r"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project
            </a>
          </p>
        </motion.div>
      </motion.div>
    </>
  );
}

export default Projects;
