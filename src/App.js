// == Import
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import './styles/index.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCookieBite, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

// Cookie banner
import CookieConsent from 'react-cookie-consent';

import Layout from 'src/components/Layout';
import ScrollTop from 'src/components/ScrollTop';
import ModalDisplay from './components/ModalDisplay';

import { fetchNews } from './redux/actions/news';

import {
  Home,
  About,
  Portfolio,
  Orent,
  Privacy,
  Crowdfunding,
} from './pages';

// == Composant
const App = () => {
  const dispatch = useDispatch();

  // API call
  useEffect(() => {
    dispatch(fetchNews());
  }, []);

  return (
    <div className="app">
      <ScrollTop />
      <Layout>

        {/* Cookie banner */}
        <CookieConsent
          location="bottom"
          style={{ background: 'hsla(0, 0%, 0%, 0.7)', justifyContent: 'center' }}
          buttonText="I understand"
          buttonStyle={{ padding: '12px', borderRadius: '25px', fontSize: '1.1rem' }}
          expires={150}
          sameSite="none"
        >
          <div className="cookies">
            <div className="cookies__img">
              <FontAwesomeIcon
                icon={faCookieBite}
                size="2xl"
                fixedWidth
              />
            </div>
            <div className="cookies__text">
              <p className="cookies__text__title">
                Cookies policy
              </p>
              <p className="cookies__text__paragraph">
                Our website uses cookies to analyze how the site is used and to ensure your experience is consistent between visits.
                <FontAwesomeIcon icon={faUpRightFromSquare} className="cookies__text__link-icon" /> <a href="/privacy" className="cookies__text__link">Privacy Policy</a>
              </p>
            </div>
          </div>
        </CookieConsent>

        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/orent" element={<Orent />} />
          <Route path="/portfolio/crowdfunding" element={<Crowdfunding />} />
          <Route path="/about" element={<About />} exact />
          <Route path="/privacy" element={<Privacy />} exact />
        </Routes>
        <ModalDisplay />
      </Layout>
    </div>
  );
};

// == Export
export default App;
