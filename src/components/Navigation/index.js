import './style.scss';

// Font Awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { setModal } from '../../redux/actions/modals';

const Navigation = () => {
  const dispatch = useDispatch();

  return (
    <>
      {/* MOBILE */}
      <nav className="mobile-menu-show">
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
      <div className="desktop-menu-show">

        <nav className="menu-desktop">

          {/* Socials */}
          <div className="menu-desktop__socials">
            <a
              href="https://www.linkedin.com/in/candicebfairand/"
              target="_blank"
              rel="noreferrer noopener"
              className="menu-desktop__socials__icon"
            >
              <FontAwesomeIcon
                icon={faLinkedinIn}
                size="lg"
                fixedWidth
              />
            </a>
            <a
              href="https://github.com/Candyfair"
              target="_blank"
              rel="noreferrer noopener"
              className="menu-desktop__socials__icon"
            >
              <FontAwesomeIcon
                icon={faGithub}
                size="lg"
                fixedWidth
              />
            </a>
          </div>

          {/* Menu */}
          <ul>
            <li><Link to="/">Skills</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><a href="https://candygetshandy.com/ux-coding/" target="_blank" rel="noreferrer noopener">Blog</a></li>
          </ul>

          {/* Contact icon */}
          <span className="menu-desktop__contact">
            <FontAwesomeIcon
              icon={faEnvelope}
              size="xl"
              fixedWidth
              onClick={() => dispatch(setModal(true, 'contact'))}
            />
          </span>
        </nav>

      </div>
    </>
  );
};

export default Navigation;
