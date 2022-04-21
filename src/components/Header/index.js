import './style.scss';

import Navigation from 'src/components/Navigation';

import logo from '../../assets/images/logo.png';

const Header = () => (
  <div className="header">
    <div className="header__logo"><img src={logo} alt="Logo" /></div>

    <Navigation className="header__nav" />

  </div>
);

export default Header;
