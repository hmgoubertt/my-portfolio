import backgroundImage from '../assets/background.jpg';
import { motion } from 'framer-motion';

function Home() {
  const sectionStyle = {
    padding: '4rem',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    color: 'white',
    minHeight: '100vh',
    textShadow: '0 0 10px rgba(0, 0, 0, 0.7)',
  };

  return (
    <motion.div
      style={sectionStyle}
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
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Hello,
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        and welcome to my portfolio!
      </motion.p>
    </motion.div>
  );
}

export default Home;

