import './style.scss';

import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import homeSm from '../../assets/images/projects/crowdfunding-home-sm.jpg';
import homeXl from '../../assets/images/projects/crowdfunding-home-xl.jpg';
import pledgeSm from '../../assets/images/projects/crowdfunding-pledge-sm.jpg';
import pledgeXl from '../../assets/images/projects/crowdfunding-pledge-xl.jpg';
import chooseSm from '../../assets/images/projects/crowdfunding-choose-sm.jpg';
import chooseXl from '../../assets/images/projects/crowdfunding-choose-xl.jpg';
import thanksSm from '../../assets/images/projects/crowdfunding-thanks-sm.jpg';
import thanksXl from '../../assets/images/projects/crowdfunding-thanks-xl.jpg';
import mobileSm from '../../assets/images/projects/crowdfunding-mobile-sm.png';
import mobileXl from '../../assets/images/projects/crowdfunding-mobile-xl.png';

const Crowdfunding = () => (
  <section className="project">
    <div className="project__intro-wrapper">
      <div className="project__text-wrapper">
        <h1 className="project__title">Crowdfunding Project</h1>

        {/* Introduction */}
        <p className="project__text">
          This is a solution to the <em className="italic">Crowdfunding product page</em> challenge on <a href="https://www.frontendmentor.io/" target="_blank" rel="noreferrer noopener" className="link">Frontend Mentor</a>.
        </p>
        <p className="project__text">
          This challenge was a good exercise to work on responsive layout and to improve my state management skills.
        </p>
      </div>

      <div className="project__stack-wrapper">
        <div className="project__stack">
          {/* Stack */}
          <div className="project__stack__left">
            <h2 className="project__stack__subtitle">Stack</h2>

            <ul className="project__stack__list">
              <li>Semantic HTML</li>
              <li>SASS/SCSS</li>
              <li>JSON</li>
              <li>React</li>
              <li>Redux</li>
              <li>Vercel</li>
              <li>Mobile-first workflow</li>
              <li>Figma</li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h2 className="project__stack__subtitle">Live</h2>

            <a href="https://crowdfunding-product-page-candyfair.vercel.app/" target="_blank" rel="noreferrer noopener" className="project__stack__link">View Site</a>

            <span className="project__stack__icon">
              <a href="https://github.com/Candyfair/crowdfunding-product-page" target="_blank" rel="noreferrer noopener">
                <FontAwesomeIcon
                  icon={faGithub}
                  size="lg"
                  fixedWidth
                />
              </a>
            </span>
          </div>

        </div>

      </div>

    </div>

    {/* PROJECT DESCRIPTION */}
    <h2 className="project__subtitle">Project Purpose and Goal</h2>

    <p className="project__text">
      Crowdfunding is a way of raising money to finance projects and businesses. It enables fundraisers to collect money from a large number of people via online platforms.
    </p>

    <p className="project__text">
      For this project, I created a crowdfunding page for a business that wants to raise money in order to launch the production of a monitor stand. When visiting this page, users are able to:
    </p>

    <p className="project__text">
      <ul className="crowdfunding__list">
        <li>View the optimal layout depending on their device's screen size</li>
        <li>See hover states for interactive elements</li>
        <li>Make a selection of which pledge to make</li>
        <li>Change the amount of the pledge if they want to</li>
        <li>See an updated progress bar and total money raised based on their pledge total after confirming a pledge</li>
        <li>See the number of total backers increment by one after confirming a pledge</li>
        <li>Toggle whether or not the product is bookmarked</li>
      </ul>
    </p>

    {/* Image: homepage */}
    <div className="project__screenshot-wrapper mobile">
      <img src={homeSm} alt="Screenshot of the homepage" className="project__screenshot" />
    </div>
    <div className="project__screenshot-wrapper desktop">
      <img src={homeXl} alt="Screenshot of the homepage" className="project__screenshot" />
    </div>

    {/* SPECIFICATIONS */}
    <h2 className="project__subtitle">Web Stack and Specifications</h2>
    <p className="project__text">
      The page displays different levels of pledges. A modal dialog component displays them all, and can be accessed either via the <em className="italic">Back this project</em> button or by selecting the wanted option in the page. In that last case, the selected pledge is automatically checked in the modal dialog window. The details of each pledge is stored in a JSON file.
    </p>

    {/* Image: pledge */}
    <div className="project__screenshot-wrapper mobile">
      <img src={pledgeSm} alt="Screenshot of the pledges modals" className="project__screenshot" />
    </div>
    <div className="project__screenshot-wrapper desktop">
      <img src={pledgeXl} alt="Screenshot of the pledges modals" className="project__screenshot" />
    </div>

    <p className="project__text">
      Each pledge is available in a limited number, and once they've all been used, the option is disabled and can't be selected anymore.
    </p>

    <p className="project__text">
      Another option allows the user to pledge without getting any reward in return. The user then type the amount they want. It's also possible to modify the amount for pledges with a pre-defined amount. I used state management in Redux and controlled inputs to handle these modifications.
    </p>

    {/* Image: choose */}
    <div className="project__screenshot-wrapper mobile">
      <img src={chooseSm} alt="Screenshot of the pledge modal dialog component" className="project__screenshot" />
    </div>
    <div className="project__screenshot-wrapper desktop">
      <img src={chooseXl} alt="Screenshot of the pledge modal dialog component" className="project__screenshot" />
    </div>

    <p className="project__text">
      After the pledge is confirmed, the number of backer and the backed amount are updated in the Redux state and on the main screen, and the gauge's length is extended proportionally.
    </p>

    {/* Image: thanks */}
    <div className="project__screenshot-wrapper mobile">
      <img src={thanksSm} alt="Screenshot of the pledge modal dialog component" className="project__screenshot" />
    </div>
    <div className="project__screenshot-wrapper desktop">
      <img src={thanksXl} alt="Screenshot of the pledge modal dialog component" className="project__screenshot" />
    </div>

    <p className="project__text">
      This web app is fully responsive and has been developed for mobiles first. The main screen and all modal dialogs adapt for smaller screens.
    </p>

    {/* Image: mobile */}
    <div className="project__screenshot-wrapper mobile">
      <img src={mobileSm} alt="Screenshot of the responsive screens" className="project__screenshot" />
    </div>
    <div className="project__screenshot-wrapper desktop">
      <img src={mobileXl} alt="Screenshot of the responsive screens" className="project__screenshot" />
    </div>

    {/* PROBLEMS */}
    <h2 className="project__subtitle">Thought Process</h2>
    <p className="project__text">
      I started by setting up a React environment with Redux. Working from the Figma design files, I first identified each component, structured them and styled them, using a main styling SCSS file for general and recurrent styles, and an individual SCSS file for each component as needed.
    </p>

    <p className="project__text">
      For this part, I styled for mobile first. Once the styling was over, I coded each interaction using Redux with a store, different states, actions and reducers. I then deployed the web app on <a href="https://vercel.com/" target="_blank" rel="noreferrer noopener" className="link">Vercel</a>.
    </p>


    {/* LESSONS LEARNED */}
    <h2 className="project__subtitle">Lessons Learned</h2>
    <p className="project__text">
      Before starting the project, it was crucial to first organize the division of the design into React components and identify the recurring styling properties that could be gathered in a centralised SCSS variable file. The design integration being very time-consuming, the better structured the project is, the faster the integration is done.
    </p>
    <p className="project__text">
      This challenge also really helped me to understand the basic functioning of Redux and how to manage state. This was a very interesting project.
    </p>

    {/* LINK TO OTHER PROJECTS */}
    <Link to="/portfolio">
      <button type="button" className="work__more">Check my other projects</button>
    </Link>

  </section>
);

export default Crowdfunding;
