import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <style>
        {`
          .nav-link {
            color: #C0FF00;
            text-decoration: none;
            transition: color 0.3s ease;
          }

          .nav-link:hover {
            color: black;
          }
        `}
      </style>

      <nav style={{
        padding: '1rem',
        backgroundColor: '#000000',
        color: '#C0FF00',
        position: 'relative',
        zIndex: 1
      }}>
        <h2 style={{ margin: 0 }}>My Portfolio</h2>
        <ul style={{
          listStyle: 'none',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          padding: 0,
          marginTop: '0.5rem'
        }}>
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/about" className="nav-link">About</Link></li>
          <li><Link to="/projects" className="nav-link">Projects</Link></li>
          <li><Link to="/contact" className="nav-link">Contact</Link></li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
