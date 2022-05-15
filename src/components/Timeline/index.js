import { useEffect } from 'react';

import './style.scss';

const Timeline = () => {
  const handleKeyDown = (event) => {
    console.log('A key was pressed', event.keyCode);
  };

  useEffect(() => {
    const years = document.querySelectorAll('.wrapper .single-item > span');
    console.log(years);

    Array.from(years).forEach((link) => {
      link.addEventListener('click', (e) => {
        document.querySelector('.wrapper .single-item.active').classList.remove('active');
        console.log(link);
        link.parentNode.classList.add('active');
      });
    });
  }, []);

  return (
    <article>
      <h1>My Programming Story</h1>

      <div className="wrapper">
        <div className="timeline-area">

          <div className="line-area" />

          <div className="single-item active">
            <span>2000 - 2006</span>
            <div className="image-area">
              <p>(image here)</p>
              <a href="#">
                <span>Envato</span>
              </a>
            </div>
          </div>

          <div className="single-item">
            <span>2006 - 2010</span>
            <div className="image-area">
              <p>(image here)</p>
              <a href="#">
                <span>Dropbox</span>
              </a>
            </div>
          </div>

          <div className="single-item">
            <span>2010 - 2015</span>
            <div className="image-area">
              <p>(image here)</p>
              <a href="#">
                <span>Themeforest</span>
              </a>
            </div>
          </div>

        </div>
      </div>

    </article>
  );
};

export default Timeline;
