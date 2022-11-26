import { useSelector } from 'react-redux';
import moment from 'moment';

import './style.scss';

const NewsFeed = () => {
  const newsfeed = useSelector((state) => state.news.list);

  return (
    <>
      <div className="newsfeed__wrapper">
        <div className="newsfeed__title-wrapper">
          <h1 className="newsfeed__title">What I'm currently working on</h1>
        </div>

        <div className="newsfeed__dots"></div>

        {/* Data from API */}
        <ul className="newsfeed__list">
          {
            newsfeed.map((news) => (
              <li className="newsfeed__list-item" key={news.uuid}>
                <span className="newsfeed__news-date">{moment(news.published_at).format('DD-MM-YYYY')}</span> <br className="newsfeed__mobile-show" /><span className="newsfeed__news-title">{news.title}</span>
              </li>
            ))
          }
        </ul>
      </div>

      <div className="newsfeed__legend">
        <p>
          News feed from my blog - <a href="https://candygetshandy.com" target="_blank" rel="noreferrer noopener">read more</a>
        </p>
      </div>

    </>
  );
};

export default NewsFeed;
