import Intro from 'src/components/Intro';
import Skills from '../../components/Skills';
import LatestWork from '../../components/LatestWork';
import Portfolio from '../Portfolio';

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
      <div className="mobile">
        <LatestWork />
      </div>

      {/* Desktop */}
      <div className="desktop">
        <Portfolio />

      </div>

    </section>
  </>
);

export default Home;
