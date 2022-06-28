import './style.scss';
import { SocialIcon } from 'react-social-icons';

const Socials = () => (
  <div className="menu-elem-footer">
    <h3>Or keep in touch via social networks:</h3>
    <div className="menu-elem-footer-icons">
      <SocialIcon
        url="https://www.linkedin.com/in/candicebfairand/"
        network="linkedin"
        className="menu-elem-footer-icon"
        bgColor="hsl(178, 96%, 27%)"
        style={{ height: 40, width: 40 }}
      />
      <SocialIcon
        url="https://github.com/Candyfair"
        network="github"
        className="menu-elem-footer-icon"
        bgColor="hsl(178, 96%, 27%)"
        style={{ height: 40, width: 40 }}
      />
      <SocialIcon
        url="https://www.instagram.com/candy.fair/"
        network="instagram"
        className="menu-elem-footer-icon"
        bgColor="hsl(178, 96%, 27%)"
        style={{ height: 40, width: 40 }}
      />

    </div>
  </div>
);

export default Socials;
