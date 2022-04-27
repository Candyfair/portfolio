import { Link } from 'react-router-dom';
import Navigation from 'src/components/Navigation';

import './style.scss';
import logo from '../../assets/images/logo.png';

const Header = () => (
  <div className="header">
    <Link to="/" className="header__logo"><img src={logo} alt="Logo" /></Link>

    <Navigation className="header__nav" />

  </div>
);

export default Header;
