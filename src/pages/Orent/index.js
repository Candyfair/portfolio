import './style.scss';

import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import homeSm from '../../assets/images/orent-home-sm.jpg';
import homeXl from '../../assets/images/orent-home-xl.jpg';
import mapSm from '../../assets/images/orent-map-sm.jpg';
import mapXl from '../../assets/images/orent-map-xl.jpg';
import mobileSm from '../../assets/images/orent-responsive-sm.png';
import mobileXl from '../../assets/images/orent-responsive-xl.png';
import errorSm from '../../assets/images/orent-404-sm.jpg';
import errorXl from '../../assets/images/orent-404-xl.jpg';

const Orent = () => (
  <section className="project">
    <div className="project__intro-wrapper">
      <div className="project__text-wrapper">
        <h1 className="project__title">O'Rent</h1>

        {/* Introduction */}
        <p className="project__text">
          O'Rent is an online marketplace that connects individuals who want to rent a place for their vacation to homeowners.
        </p>
        <p className="project__text">
          As a front-end developer, I built this project from scratch within a month with React and MaterialUI, alongside another front-end developer and a back-end developer.
        </p>
      </div>

      <div className="project__stack-wrapper">
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

      </div>

    </div>

    {/* PROJECT DESCRIPTION */}
    <h2 className="project__subtitle">Project Purpose and Goal</h2>

    <p className="project__text">
      This React application is a graduation project. I was part of a team of 3 developers and we developed the project within 3 sprints of one week each. I was in charge of writing the invitation to tender and detailing the functional specifications.
    </p>
    <p className="project__text">
      Our goal was to make an online market place where homeowners could publish an ad with photos and dates of availability to advertise their property, and rent it to private individuals while they would be on vacation.
    </p>

    {/* Image: homepage */}
    <div className="project__screenshot-wrapper mobile">
      <img src={homeSm} alt="Screenshot of the homepage" className="project__screenshot" />
    </div>
    <div className="project__screenshot-wrapper desktop">
      <img src={homeXl} alt="Screenshot of the homepage" className="project__screenshot" />
    </div>

    {/* SPECIFICATIONS */}
    <h2 className="project__subtitle">Web Stack and Specifications</h2>
    <p className="project__text">
      In order to create an ad for their property as homeowner, or to rent one as a user, visitors have to create an account. React hooks, session storage and Redux were used to interact with the data and display it when needed, according to the logged status of the users.
    </p>

    {/* Image: map of properties */}
    <div className="project__screenshot-wrapper mobile">
      <img src={mapSm} alt="Screenshot of the map with all the properties" className="project__screenshot" />
    </div>
    <div className="project__screenshot-wrapper desktop">
      <img src={mapXl} alt="Screenshot of the map with all the properties" className="project__screenshot" />
    </div>

    <p className="project__text">
      A Geocoding API was used in order to show the different properties on a map.
    </p>

    {/* Image: responsive */}
    <div className="project__screenshot-wrapper mobile">
      <img src={mobileSm} alt="Screenshot of the responsive version of the website" className="project__screenshot" />
    </div>
    <div className="project__screenshot-wrapper desktop">
      <img src={mobileXl} alt="Screenshot of the responsive version of the website" className="project__screenshot" />
    </div>

    <p className="project__text">
      Also, the website is fully responsive and includes a dark mode that can be activated on demand for reading comfort.
    </p>

    {/* PROBLEMS */}
    <h2 className="project__subtitle">Problems and Thought Process</h2>
    <p className="project__text">
      The timeframe to release the app being short, we made the decision to use MaterialUI, a popular React UI framework, thinking it would allow us to save time on the front-end design development.
    </p>
    <p className="project__text">
      However, getting familiar with a tool that none of the front-end developer used before took more time than expected and became a liability more than a benefit.
    </p>

    {/* Image: error 404 */}
    <div className="project__screenshot-wrapper mobile">
      <img src={errorSm} alt="Screenshot of the page 404" className="project__screenshot" />
    </div>
    <div className="project__screenshot-wrapper desktop">
      <img src={errorXl} alt="Screenshot of the page 404" className="project__screenshot" />
    </div>

    {/* LESSONS LEARNED */}
    <h2 className="project__subtitle">Lessons Learned</h2>
    <p className="project__text">
      Using a UI framework can be an interesting option, but only if the framework is already mastered and the project doesn't require a lot of customisation, as
    </p>
    <p className="project__text">
      Also, working in a team - even a small one - requires a good level of communication, regular updates during SCRUM meetings and a proper management of git branches to avoid duplicates or code losses.
    </p>

    {/* LINK TO OTHER PROJECTS */}
    <Link to="/portfolio">
      <button type="button" className="work__more">Check my other projects</button>
    </Link>

  </section>
);

export default Orent;
