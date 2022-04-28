import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

const TechSkills = () => (
  <article>
    <h2 className="skills__title">
      Technical Skills
    </h2>

    {/* Stack & Environment */}
    <h3 className="skills__subtitle">Stack & Environment</h3>

    {/* Skill details */}
    <div className="skills__details">
      HTML, CSS, SASS, JavaScript, Node.js, React, Redux, Next.js, PostGreSQL, Git+Github, VSCode, Notion
    </div>

    {/* UI/UX Design */}
    <h3 className="skills__subtitle">UI/UX Design</h3>

    {/* Skill details */}
    <div className="skills__details">
      Adobe Photoshop, InDesign, Illustrator, Whimsical, Figma
    </div>

    {/* E-commerce */}
    <h3 className="skills__subtitle">E-commerce</h3>

    {/* Skill details */}
    <div className="skills__details">
      Shopify, Squarespace,<br />
      SEO
    </div>

  </article>
);

export default TechSkills;
