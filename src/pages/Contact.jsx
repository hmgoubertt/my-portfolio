import { motion } from 'framer-motion';

function Contact() {
  const containerStyle = {
    padding: '2rem',
    color: '#FFFFFF',
    minHeight: '100vh',
    textShadow: '0 0 10px rgba(0, 0, 0, 0.7)',
  };

  const inputStyle = {
    width: '300px',
    padding: '0.5rem',
    marginBottom: '1rem',
    border: 'none',
    borderRadius: '5px',
  };

  const textareaStyle = {
    width: '600px',
    height: '150px',
    padding: '0.5rem',
    marginBottom: '1rem',
    border: 'none',
    borderRadius: '5px',
  };

  const buttonStyle = {
    backgroundColor: '#C0FF00',
    color: '#000000',
    border: 'none',
    padding: '0.75rem 1.5rem',
    borderRadius: '5px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  return (
    <>
      <style>{`
        .contact-link {
          color: #C0FF00;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .contact-link:hover {
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
          style={{ color: '#C0FF00', marginBottom: '1rem' }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact Me
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Have a question or want to work together?
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <label>Name:</label><br />
          <input type="text" placeholder="Your name" style={inputStyle} />
          <br />
          <label>Email:</label><br />
          <input type="email" placeholder="Your email" style={inputStyle} />
          <br />
          <label>Message:</label><br />
          <textarea placeholder="Your message" style={textareaStyle}></textarea>
          <br />
          <button
            type="submit"
            style={buttonStyle}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#00B6B4')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#C0FF00')}
          >
            Send Message
          </button>
        </motion.form>

        <motion.p
          style={{ marginTop: '2rem' }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Feel free to reach out to me at:
          <br />
          hmgoubert@gmail.com
          <br />
          <a
            href="https://artstation.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            Art Station
          </a>
          <br />
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            LinkedIn
          </a>
        </motion.p>
      </motion.div>
    </>
  );
}

export default Contact;
