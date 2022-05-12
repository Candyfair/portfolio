import './style.scss';

import Presentation from '../../components/Presentation';
import Story from '../../components/Story';
import Timeline from '../../components/Timeline';

const About = () => (
  <section className="about">

    <Presentation />

    <div className="mobile">
      <Story />
    </div>

    <div className="desktop">
      <Timeline />
    </div>

  </section>
);

export default About;
