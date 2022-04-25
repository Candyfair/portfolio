import { useSelector } from 'react-redux';

import './style.scss';
import { SocialIcon } from 'react-social-icons';
import icon from '../../../assets/images/iconcandy.png';

const MobileMenu = () => {
  const { element } = useSelector((state) => state.modals);

  if (element !== 'menu') return null;

  return (
    <section className="menu-elem">
      <div className="menu-elem-img">
        <img src={icon} alt="Avatar" />
      </div>

      <div className="menu-elem-titles">
        <h2>Skills</h2>
        <h2>Portfolio</h2>
        <h2>About</h2>
        <h2>Contact</h2>
      </div>

      <div className="menu-elem-footer">
        <h3>Or keep in touch via social networks:</h3>
        <div className="menu-elem-footer-icons">
          <SocialIcon network="linkedin" className="menu-elem-footer-icon" bgColor="hsl(178, 96%, 27%)" />
          <SocialIcon network="github" className="menu-elem-footer-icon" bgColor="hsl(178, 96%, 27%)" />
          <SocialIcon network="instagram" className="menu-elem-footer-icon" bgColor="hsl(178, 96%, 27%)" />

        </div>
      </div>

    </section>
  );
};

export default MobileMenu;
