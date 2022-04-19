import './style.scss';

import Intro from 'src/components/Intro';

const Home = () => (
  <>
    <section className="intro">
      <Intro />
    </section>

    <section className="skills">
      My Skills
    </section>

    <section className="portfolio">
      Latest projects
    </section>
  </>
);

export default Home;
