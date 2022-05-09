import './style.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import homeSm from '../../assets/images/orent-home-sm.jpg';
import mapSm from '../../assets/images/orent-map-sm.jpg';

const Orent = () => (
  <section className="project">
    <h1 className="project__title">O'Rent</h1>

    {/* Introduction */}
    <p className="project__text">
      O'Rent is an online marketplace that connects individuals who want to rent a place for their vacation to homeowners. This React application is a graduation project.
    </p>
    <p className="project__text">
      As a front-end developer, I built this project from scratch within a month with React and MaterialUI, alongside another front-end developer and a back-end developer.
    </p>

    <div className="project__stack">
      {/* Stack */}
      <div className="project__stack__left">
        <h2 className="project__stack__subtitle">Stack</h2>

        <ul className="project__stack__list">
          <li>React</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>PostGreSQL</li>
          <li>Nodemailer</li>
          <li>MaterialUI</li>
          <li>Vercel/Heroku</li>
        </ul>
      </div>

      {/* Links */}
      <div>
        <h2 className="project__stack__subtitle">Live</h2>

        <a href="https://o-rent.vercel.app" target="_blank" rel="noreferrer noopener" className="project__stack__link">View Site</a>

        <span className="project__stack__icon">
          <a href="https://github.com/Candyfair/ORent" target="_blank" rel="noreferrer noopener">
            <FontAwesomeIcon
              icon={faGithub}
              size="lg"
              fixedWidth
            />
          </a>
        </span>
      </div>
    </div>

    <div className="project__screenshot-wrapper">
      <img src={homeSm} alt="Screenshot of the homepage" className="project__screenshot" />
    </div>

    <p className="project__text">
      Project Purpose and Goal - Web Stack and Explanation - Problems and Thought Process - Lessons Learned
    </p>

    <div className="project__screenshot-wrapper">
      <img src={mapSm} alt="Screenshot of the map with all the properties" className="project__screenshot" />
    </div>

  </section>
);

export default Orent;
