import '../styles/navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <h1>Math Magicians</h1>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/Calculator">Calculator</Link></li>
      <li><Link to="/Quotes">Quotes</Link></li>
    </ul>
  </nav>
);

export default Navbar;
