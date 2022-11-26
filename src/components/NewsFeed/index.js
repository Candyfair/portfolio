import { useSelector } from 'react-redux';

import './style.scss';

const NewsFeed = () => {
  const newsfeed = useSelector((state) => state.news.list);

  return (
    <div>
      <h1>NewsFeed</h1>
      <ul>
        {
          newsfeed.map((news) => (
            <li key={news.uuid}>
              {news.published_at} : {news.title}
            </li>
          ))

        }
      </ul>
    </div>
  );
};

export default NewsFeed;
