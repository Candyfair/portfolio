import './style.scss';

import img1 from '../../assets/images/img1.png';
import img2 from '../../assets/images/img2.png';
import img3 from '../../assets/images/img3.png';

const Story = () => (
  <div className="story">
    <h1 className="story__title">My Programming Story</h1>

    <article className="story__timeline">

      {/* 1986 */}
      <div id="tint1" className="story__timeline__container">
        <div className="story__timeline__content">
          <h2 className="story__timeline__content__year">1986</h2>
          <p>My parents bring home an <span className="tint1">Amstrad CPC 464</span>. It has a tape drive and a green monochrome monitor. Games are all pixelized and can take up to 15 minutes to load. I'm 7 and I'm hooked.</p>
        </div>

        {/* Image 1 */}
        <div className="story__timeline__content__image-pos">
          <img className="story__timeline__content__image" src={img1} alt="Amstrad CPC 464" />
        </div>
      </div>

      {/* 1993 */}
      <div id="tint2" className="story__timeline__container">
        <div className="story__timeline__content">
          <h2 className="story__timeline__content__year">1993</h2>
          <p>I'm at secondary school, I chose an IT option and I'm learning how to code in <span className="tint2">Turbo Pascal</span>. So vintage!</p>
        </div>
      </div>

      {/* 1995 */}
      <div id="tint3" className="story__timeline__container">
        <div className="story__timeline__content">
          <h2 className="story__timeline__content__year">1995</h2>
          <p>At home, we now have a computer that reads 5¼" floppy disks, and a dot-matrix printer. My mom teaches me how to use <span className="tint3">MS Office</span> suite and I start writing my first novel. After 150 pages and a hard drive crash, I lose everything I wrote. That's how I learn the importance of doing backups and saving my work regularly.</p>
        </div>

        {/* Image 2 */}
        <div className="story__timeline__content__image-pos">
          <img className="story__timeline__content__image" src={img2} alt="Dot-matrix printer" />
        </div>
      </div>

      {/* 1998 */}
      <div id="tint4" className="story__timeline__container">
        <div className="story__timeline__content">
          <h2 className="story__timeline__content__year">1998</h2>
          <p>As a student, I have a part-time job as a night receptionist. With few visitors and a laptop left for the reception, I use this machine to make my first <span className="tint4">HTML</span> website on GeoCities with lots of frames, blinking titles and very aggressive animated gifs.</p>
        </div>

        {/* Image 3 */}
        <div className="story__timeline__content__image-pos">
          <img className="story__timeline__content__image" src={img3} alt="Laptop" />
        </div>
      </div>

      {/* 2004 */}
      <div id="tint1" className="story__timeline__container">
        <div className="story__timeline__content">
          <h2 className="story__timeline__content__year">2004</h2>
          <p>I'm a management accountant for an American consulting firm where I'm known as "The Queen of Excel". My dashboards include pivot tables and are automated with sparkling <span className="tint1">VBA</span> scripts.</p>
        </div>
      </div>

      {/* 2008 */}
      <div id="tint2" className="story__timeline__container">
        <div className="story__timeline__content">
          <h2 className="story__timeline__content__year">2008</h2>
          <p>I move to the South of France and start an online business. I begin with the open source platform Joomla and the extension Virtuemart for <span className="tint2">e-commerce</span>. Two years later my business expands and I migrate to Prestashop. For both of these I learn to use PHP to make my site stand out.</p>
        </div>
      </div>

      {/* 2015 */}
      <div id="tint3" className="story__timeline__container">
        <div className="story__timeline__content">
          <h2 className="story__timeline__content__year">2015</h2>
          <p>My life takes an unexpected turn. I have to close my business and move back to Paris. I take an administrative job which involves managing some IT projects and in my free time I learn <span className="tint3">JavaScript</span>.</p>
        </div>
      </div>

      {/* 2021 */}
      <div id="tint4" className="story__timeline__container">
        <div className="story__timeline__content">
          <h2 className="story__timeline__content__year">2021</h2>
          <p>I decide that I need to do a dedicated Full Stack training to bring together everything that I've learnt over the years. My passion for <span className="tint4">UI and graphic design</span> push me towards front end development.</p>
        </div>
      </div>

    </article>
  </div>
);

export default Story;
