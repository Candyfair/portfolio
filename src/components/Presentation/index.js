import './style.scss';
import photo from '../../assets/images/photo.jpg';
import avatar from '../../assets/images/iconcandy.png';

const Presentation = () => (
  <article className="about-wrapper">

    {/* Photo */}
    <img
      className="about__photo"
      src={photo}
      alt="Candice Fairand frontend web developer"
    />

    {/* Text */}
    <div className="about__presentation">
      <div className="about__presentation__title">Hello there!</div>
      <p className="about__presentation__text">
        I’m Candice Fairand, a web developer working in Paris, France, with a passion for illustration and visual design.
      </p>

      <p className="about__presentation__text">
        I am well versed in design trends, and usability. I program in CSS, HTML, JavaScript and ReactJS.
      </p>

      <p className="about__presentation__text">
        My aim is to work in an international environment where I can use all of my creative, problem solving and management skills to deliver innovative solutions.
      </p>

      {/* Links */}
      <div className="about__presentation__links">
        <a
          className="about__presentation__links__link"
          href="https://www.linkedin.com/in/candicebfairand/"
        >
          LinkedIn
        </a>

        <img className="about__presentation__links__avatar" src={avatar} alt="Avatar" />

        <a
          className="about__presentation__links__link"
          href="https://github.com/Candyfair"
        >
          GitHub
        </a>
      </div>

    </div>

  </article>
);

export default Presentation;
