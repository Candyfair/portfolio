import './style.scss';

import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import crowdfunding from '../../assets/images/crowdfunding2-project.jpg';
import orent from '../../assets/images/orent-project.jpg';
import faq from '../../assets/images/faq-project.jpg';

const Portfolio = () => {
  const goToGithub = () => {
    window.open('https://github.com/Candyfair');
  };

  return (
    <section className="projects">

      {/* TITLE & SUBTITLE */}
      <div className="projects__title-group">
        <h1 className="projects__title">What I've been working on</h1>
        <p className="projects__subtitle">Selected projects</p>
      </div>

      {/* PORTFOLIO CONTENT */}
      <div className="projects__details-content">

        {/* Project CROWDFUNDING */}
        <article className="projects__details">
          <Link to="/portfolio/crowdfunding">
            <img src={crowdfunding} alt="Screenshots for Crowdfunding project" className="projects__details__img" />
          </Link>

          <div className="projects__details__text">
            <div>
              <h2 className="projects__details__text__title">Crowdfund</h2>
              <p className="projects__details__text__desc">A crowdfunding product page built with React/Redux</p>
            </div>
            <Link to="/portfolio/crowdfunding" className="projects__details__text__link">
              Read Story {'>'}
            </Link>
          </div>
        </article>

        {/* Project O'RENT */}
        <article className="projects__details">
          <Link to="/portfolio/orent">
            <img src={orent} alt="Screenshots for project O'Rent" className="projects__details__img" />
          </Link>

          <div className="projects__details__text">
            <div>
              <h2 className="projects__details__text__title">O'Rent</h2>
              <p className="projects__details__text__desc">A vacation rental marketplace built with React</p>
            </div>
            <Link to="/portfolio/orent" className="projects__details__text__link">
              Read Story {'>'}
            </Link>
          </div>
        </article>

        {/* Project FAQ component */}
        <article className="projects__details">
          <a href="https://faq-accordion-card-brown-rho.vercel.app/" className="projects__details__text__link" target="_blank" rel="noreferrer noopener">
            <img src={faq} alt="Screenshots for FAQ component" className="projects__details__img" />
          </a>

          <div className="projects__details__text">
            <div>
              <h2 className="projects__details__text__title">FAQ component</h2>
              <p className="projects__details__text__desc">A responsive web app for a FAQ component</p>
            </div>

            <div className="projects__details__links-group">
              <a href="https://faq-accordion-card-brown-rho.vercel.app/" className="projects__details__text__link" target="_blank" rel="noreferrer noopener">
                View project {'>'}
              </a>
              <span className="projects__details__text__icon">
                <a href="https://github.com/Candyfair/faq-accordion-card" target="_blank" rel="noreferrer noopener">
                  <FontAwesomeIcon
                    icon={faGithub}
                    size="lg"
                    fixedWidth
                  />
                </a>
              </span>
            </div>
          </div>
        </article>

        {/* BUTTON */}
        <button
          type="button"
          className="projects__details__more"
          onClick={goToGithub}
        >
          Check my <br />other projects on Github
        </button>

      </div>

    </section>
  );
};

export default Portfolio;
