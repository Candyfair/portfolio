import './style.scss';

// Font Awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

// Social icons
import { SocialIcon } from 'react-social-icons';

import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { setModal } from '../../redux/actions/modals';

const Navigation = () => {
  const dispatch = useDispatch();

  return (
    <>
      {/* MOBILE */}
      <nav className="mobile">
        <span className="menu-icon">
          <FontAwesomeIcon
            icon={faEllipsisVertical}
            size="xl"
            fixedWidth
            inverse
            onClick={() => dispatch(setModal(true, 'menu'))}
          />
        </span>
      </nav>

      {/* DESKTOP */}
      <div className="desktop">

        <nav className="menu-desktop">

          {/* Socials */}
          <div className="menu-desktop__socials">
            <span className="menu-desktop__socials__icon">
              <FontAwesomeIcon
                icon={faLinkedinIn}
                size="lg"
                fixedWidth
              />
            </span>
            <span className="menu-desktop__socials__icon">
              <FontAwesomeIcon
                icon={faGithub}
                size="lg"
                fixedWidth
              />
            </span>
          </div>

          {/* Menu */}
          <ul>
            <li><Link to="/">Skills</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>

          {/* Contact icon */}
          <span className="menu-desktop__contact">
            <FontAwesomeIcon
              icon={faEnvelope}
              size="xl"
              fixedWidth
            />
          </span>
        </nav>

      </div>
    </>
  );
};

export default Navigation;
