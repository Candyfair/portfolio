import './style.scss';

import Intro from 'src/components/Intro';
import Skills from '../../components/Skills';
import LatestWork from '../../components/LatestWork';
import Portfolio from '../Portfolio';
import NewsFeed from '../../components/NewsFeed';

const Home = () => (
  <>
    <section className="intro">
      <Intro />
    </section>

    <section className="skills">
      <Skills />
    </section>

    <section className="work">
      {/* Mobile */}
      <div className="portfolio-mobile">
        <LatestWork />
      </div>

      {/* Desktop */}
      <div className="portfolio-desktop">
        <Portfolio />

      </div>
    </section>

    <section className="newsfeed">
      <NewsFeed />
    </section>
  </>
);

export default Home;
