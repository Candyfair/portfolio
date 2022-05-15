import { useEffect } from 'react';

import { Link } from 'react-router-dom';

import './style.scss';

import img1 from '../../assets/images/img1.png';
import img2 from '../../assets/images/img2.png';
import img3 from '../../assets/images/img3.png';
import lastimage from '../../assets/images/candycodesanddraw.png';

const Timeline = () => {
  useEffect(() => {
    const yearsNode = document.querySelectorAll('.wrapper .single-item > span');

    Array.from(yearsNode).forEach((yearNode) => {
      yearNode.addEventListener('mouseenter', (e) => {
        document.querySelector('.wrapper .single-item.active').classList.remove('active');
        yearNode.parentNode.classList.add('active');
      });
    });
  }, []);

  return (
    <article className="story">
      <h1 className="story__title">My Programming Story</h1>

      <div className="wrapper">
        <div className="timeline-area">

          <div className="line-area" />

          {/* 1986 */}
          <div className="single-item active">
            <span>1986</span>
            <div className="image-area">
              <p>My parents bring home an <em className="tint1">Amstrad CPC 464</em>. It has a tape drive and a green monochrome monitor. Games are all pixelized and can take up to 15 minutes to load. I'm 7 and I'm hooked.</p>
            </div>
            <img src={img1} alt="Amstrad CPC 464" className="image-right" />
          </div>

          {/* 1993 */}
          <div className="single-item">
            <span>1993</span>
            <div className="image-area">
              <p>I'm at secondary school, I chose an IT option and I'm learning how to code in <em className="tint3">Turbo Pascal</em>. So vintage!</p>

            </div>
          </div>

          {/* 1995 */}
          <div className="single-item">
            <span>1995</span>
            <div className="image-area">
              <p>At home, we now have a computer that reads 5¼" floppy disks, and a dot-matrix printer. My mom teaches me how to use <em className="tint4">MS Office</em> suite and I start writing my first novel.</p> <p>After 150 pages and a hard drive crash, I lose everything I wrote. That's how I learn the importance of doing backups and saving my work regularly.</p>
            </div>
            <img src={img2} alt="Dot-matrix printer" className="image-right" />
          </div>

          {/* 1998 */}
          <div className="single-item">
            <span>1998</span>
            <div className="image-area">
              <p>As a student, I have a part-time job as a night receptionist. With few visitors and a laptop left for the reception, I use this machine to make my first <em className="tint1">HTML</em> website on GeoCities with lots of frames, blinking titles and very aggressive animated gifs.</p>
            </div>
            <img src={img3} alt="Laptop from the 1990s" className="image-right" />
          </div>

          {/* 2004 */}
          <div className="single-item">
            <span>2004</span>
            <div className="image-area">
              <p>I'm a management accountant for an American consulting firm where I'm known as "The Queen of Excel".</p> <p>My dashboards include pivot tables and are automated with sparkling <em className="tint3">VBA</em> scripts.</p>
            </div>
          </div>

          {/* 2008 */}
          <div className="single-item">
            <span>2008</span>
            <div className="image-area">
              <p>I move to the South of France and start an online business. I begin with the open source platform Joomla and the extension Virtuemart for <em className="tint4">e-commerce</em>.</p> <p>Two years later my business expands and I migrate to Prestashop. For both of these I learn to use PHP to make my site stand out.</p>
            </div>
          </div>

          {/* 2015 */}
          <div className="single-item">
            <span>2015</span>
            <div className="image-area">
              <p>My life takes an unexpected turn. I have to close my business and move back to Paris.</p> <p>I take an administrative job which involves managing some IT projects and in my free time I learn <em className="tint1">JavaScript</em>.</p>
            </div>
          </div>

          {/* 2021 */}
          <div className="single-item">
            <span>2021</span>
            <div className="image-area">
              <p>I decide that I need to do a dedicated Full Stack training to bring together everything that I've learnt over the years.</p> <p>My passion for <em className="tint3">UI and graphic design</em> push me towards front end development.</p>
            </div>
            <Link to="/">
              <img src={lastimage} alt="Candy codes and draw" className="image-left" />
            </Link>
          </div>

        </div>
      </div>

    </article>
  );
};

export default Timeline;
