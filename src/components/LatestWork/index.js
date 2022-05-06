import './style.scss';

import orent from '../../assets/images/orent-home.jpg';

const LatestWork = () => (
  <div className="work__wrapper">
    <h1 className="work__title">My latest work</h1>

    {/* Projet O'RENT */}
    <div className="work__project">
      <div className="work__project__text">
        <h2 className="work__project__text__title">O'Rent</h2>
        <p className="work__project__text__subtitle">
          Vacation rental marketplace<br />
          JavaScript/React
        </p>
      </div>

      <img src={orent} alt="Project O'Rent" className="work__project__img" />
    </div>

    <button type="button" className="work__more">Check my portfolio</button>
  </div>
);

export default LatestWork;
