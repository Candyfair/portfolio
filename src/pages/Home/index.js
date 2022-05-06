import './style.scss';

import Intro from 'src/components/Intro';
import Skills from '../../components/Skills';
import LatestWork from '../../components/LatestWork';

const Home = () => (
  <>
    <section className="intro">
      <Intro />
    </section>

    <section className="skills">
      <Skills />
    </section>

    <section className="work">
      <LatestWork />
    </section>
  </>
);

export default Home;
