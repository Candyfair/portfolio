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
      {/* Mobile */}
      <div className="mobile">
        <LatestWork />
      </div>

    </section>
  </>
);

export default Home;
