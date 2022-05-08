import './style.scss';

import orent from '../../assets/images/orent-project.jpg';
import faq from '../../assets/images/faq-project.jpg';
import order from '../../assets/images/order-project.jpg';

const Portfolio = () => {
  const goToGithub = () => {
    window.open('https://github.com/Candyfair');
  };

  return (
    <section className="projects">
      <h1 className="projects__title">What I've been working on</h1>
      <p className="projects__subtitle">Selected projects</p>

      {/* Project O'RENT */}
      <article className="projects__details">
        <img src={orent} alt="Screenshots for project O'Rent" className="projects__details__img" />

        <div className="projects__details__text">
          <h2 className="projects__details__text__title">O'Rent</h2>
          <p className="projects__details__text__desc">A vacation rental marketplace built with React</p>
          <a href="https://github.com/Candyfair/ORent" className="projects__details__text__link">View project {'>'}</a>
        </div>
      </article>

      {/* Project FAQ component */}
      <article className="projects__details">
        <img src={faq} alt="Screenshots for FAQ component" className="projects__details__img" />

        <div className="projects__details__text">
          <h2 className="projects__details__text__title">FAQ component</h2>
          <p className="projects__details__text__desc">A responsive web app for a FAQ component</p>
          <a href="https://github.com/Candyfair/faq-accordion-card" className="projects__details__text__link">View project {'>'}</a>
        </div>
      </article>

      {/* Project FAQ component */}
      <article className="projects__details">
        <img src={order} alt="Screenshots for order component" className="projects__details__img" />

        <div className="projects__details__text">
          <h2 className="projects__details__text__title">Order summary component</h2>
          <p className="projects__details__text__desc">A responsive web app for an order summary component</p>
          <a href="https://github.com/Candyfair/order-summary-component" className="projects__details__text__link">View project {'>'}</a>
        </div>
      </article>

      {/* BUTTON */}
      <button
        type="button"
        className="projects__details__more"
        onClick={goToGithub}
      >
        View all my other projects on Github
      </button>

    </section>
  );
};

export default Portfolio;
