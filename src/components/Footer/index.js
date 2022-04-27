import './style.scss';
import { SocialIcon } from 'react-social-icons';

import { useDispatch } from 'react-redux';
import { setModal } from '../../redux/actions/modals';

const Footer = () => {
  const dispatch = useDispatch();

  return (
    <section className="footer-elem">

      <div className="footer-elem__wrapper">
        <h2 className="footer-elem__wrapper__title">
          Let’s make something together!
        </h2>

        {/* Contact form */}
        <div className="footer-elem__wrapper__contact">
          Start by&nbsp;
          <span
            className="footer-elem__wrapper__contact__link"
            onClick={() => dispatch(setModal(true, 'contact'))}
          >
            saying hi
          </span>
        </div>

        {/* Social icons */}
        <div className="footer-elem__wrapper__socials">
          <p className="footer-elem__wrapper__socials__paragraph">Or let's keep in touch on social media:</p>

          <div className="footer-elem__wrapper__socials__icons">
            <div>
              <SocialIcon
                network="linkedin"
                bgColor="hsl(0, 0%, 100%)"
                style={{ height: 36, width: 36 }}
                className="footer-elem__wrapper__socials__icon"
              />
              <p className="footer-elem__wrapper__socials__icon-desc">LinkedIn</p>
            </div>

            <div>
              <SocialIcon
                network="github"
                bgColor="hsl(0, 0%, 100%)"
                style={{ height: 36, width: 36 }}
                className="footer-elem__wrapper__socials__icon"
              />
              <p className="footer-elem__wrapper__socials__icon-desc">GitHub</p>
            </div>

            <div>
              <SocialIcon
                network="instagram"
                bgColor="hsl(0, 0%, 100%)"
                style={{ height: 36, width: 36 }}
                className="footer-elem__wrapper__socials__icon"
              />
              <p className="footer-elem__wrapper__socials__icon-desc">Instagram</p>
            </div>

          </div>
        </div>

        {/* About me button */}
        <div>
          <button type="button" className="footer-elem__wrapper__about">About me</button>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-elem__copyright">
        © 2022 Candice Fairand - Built with React
      </div>

    </section>
  );
};

export default Footer;
