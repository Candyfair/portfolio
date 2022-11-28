import { Link } from 'react-router-dom';

import './style.scss';
import img from '../../assets/images/img-404.png';

const NotFound = () => (
  <div className="error">
    <div className="error__image">
      <img src={img} alt="Error 404" />
    </div>

    <div className="error__text-wrapper">
      <h1 className="error__title">
        Oh no, the cat stole the page again...
      </h1>
      <h2 className="error__subtitle">
        No worries !
      </h2>
      <p className="error__text">
        You can head to my <Link to="/" className="error__link">homepage</Link>, have a look at my <Link to="/portfolio" className="error__link">portfolio</Link> or read my <Link to="/about" className="error__link">Programming Story</Link>
      </p>
    </div>

  </div>
);

export default NotFound;
