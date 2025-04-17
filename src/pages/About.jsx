import { motion } from 'framer-motion';
import backgroundImage from '../assets/background.jpg';

function About() {
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

  const headingStyle = {
    color: '#C0FF00',
    marginBottom: '1rem',
  };

  const paragraphStyle = {
    maxWidth: '700px',
    marginBottom: '1rem',
  };

  const listStyle = {
    maxWidth: '700px',
    paddingLeft: '1.2rem',
    lineHeight: '1.6',
  };

  return (
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
        style={headingStyle}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h1>

      <motion.p
        style={paragraphStyle}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Hi, my name is Haley and I'm a developer/designer. I enjoy building creative and dynamic projects.
      </motion.p>

      <motion.ul
        style={listStyle}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <li>
          <strong>Skills:</strong> HTML, CSS, JavaScript, React, Photoshop, Illustrator, Premiere Pro, Figma,
          Microsoft Suite, Procreate, Lightroom, VSCode, Airtable, GitHub, and MongoDB
        </li>
        <li>
          <strong>Interests:</strong> UI/UX, art, film, and wardrobe design
        </li>
      </motion.ul>
    </motion.div>
  );
}

export default About;
