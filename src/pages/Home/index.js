import './style.scss';

import Intro from 'src/components/Intro';
import Skills from '../../components/Skills';

const Home = () => (
  <>
    <section className="intro">
      <Intro />
    </section>

    <section className="skills">
      <Skills />
    </section>

    <section className="portfolio">
      Latest projects
    </section>
  </>
);

export default Home;
