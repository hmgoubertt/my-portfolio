import watercolor from '../assets/watercolor.png';
import digitalArt from '../assets/digital-art.png';
import collage from '../assets/collage.png';
import { motion } from 'framer-motion';

function Projects() {
  const containerStyle = {
    padding: '2rem',
    color: '#FFFFFF',
    minHeight: '100vh',
    textShadow: '0 0 10px rgba(0, 0, 0, 0.7)',
  };

  const imageStyle = {
    width: '100%',
    maxWidth: '400px',
    borderRadius: '12px',
    margin: '10px 0',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)',
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

        {/* Watercolor */}
        <motion.div
          style={{ marginBottom: '2rem' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2>Watercolor</h2>
          <motion.img
            src={watercolor}
            alt="Watercolor flower painting"
            style={imageStyle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          />
          <p>
            A delicate watercolor painting of a coneflower<br />
            basking in soft morning light, surrounded by gentle blades of grass. <br />
            This piece explores softness and texture using layering <br />
            and wet-on-wet brush techniques on cold press paper.
          </p>
          <a
            href="https://www.artstation.com/artwork/VJ6V0g"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View Project
          </a>
        </motion.div>

        {/* Digital Art */}
        <motion.div
          style={{ marginBottom: '2rem' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2>Digital Art</h2>
          <motion.img
            src={digitalArt}
            alt="Digital heart with surreal eyes"
            style={imageStyle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          />
          <p>
            A surreal digital illustration of a heart-shaped <br />
            face with exaggerated, dreamy eyes and lips. <br />
            Made in Procreate, this piece blends bold color with <br />
            cartoonish features to evoke emotion and surreal charm.
          </p>
          <a
            href="https://www.artstation.com/artwork/ArV89e"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View Project
          </a>
        </motion.div>

        {/* Digital Collage */}
        <motion.div
          style={{ marginBottom: '2rem' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2>Digital Collage</h2>
          <motion.img
            src={collage}
            alt="Surreal collage with ocean and mouth"
            style={imageStyle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          />
          <p>
            A surreal digital collage blending photography and absurdism. <br />
            This composition features a suited figure falling into a mouth<br />
            filled with ocean waves and a jumping fish—symbolizing chaos,<br />
            anxiety, and humor in modern life.
          </p>
          <a
            href="https://www.artstation.com/artwork/blo46r"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View Project
          </a>
        </motion.div>
      </motion.div>
    </>
  );
}

export default Projects;
