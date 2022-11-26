import { Link } from 'react-router-dom';

import './style.scss';

import project from '../../assets/images/crowdfunding-project.jpg';

const LatestWork = () => (
  <div className="work__wrapper">
    <h1 className="work__title">My latest work</h1>

    {/* Projet O'RENT */}
    <div className="work__project">
      <div className="work__project__text">
        <h2 className="work__project__text__title">Crowdfund</h2>
        <p className="work__project__text__subtitle">
          Crowdfunding Product Page<br />
          React/Redux
        </p>
      </div>

      <Link to="/portfolio/crowdfunding">
        <img src={project} alt="Project Crowdfunding" className="work__project__img" />
      </Link>

    </div>

    <div className="work__more-wrapper">
      <Link to="/portfolio">
        <button type="button" className="work__more">Check my portfolio</button>
      </Link>
    </div>
  </div>
);

export default LatestWork;
