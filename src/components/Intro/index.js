import './style.scss';
import img from '../../assets/images/candycodesanddraw.png';

const Intro = () => (
  <section className="intro">
    <h1 className="intro__title">Hi, I'm Candice</h1>
    <p className="intro__paragraph">A front-end developer with a background in finance, graphic design and e-commerce</p>
    <div className="intro__image__container">
      <img className="intro__image" src={img} alt="Candice is coding" />
    </div>
  </section>
);

export default Intro;
