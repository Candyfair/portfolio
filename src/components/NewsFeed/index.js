import { useState, useEffect } from 'react';
import axios from 'axios';

import './style.scss';

const NewsFeed = () => {
  const [posts, setPosts] = useState([]);

  const fetchArticles = () => {
    console.log('Aller chercher les articles');

    axios({
      url: 'https://candygetshandy.com/ghost/api/v4/content/posts/?key=f05e2ecb1b42b200d781a27b77&filter=tag:news',
      method: 'get',
    })
      .then((res) => {
        console.log(res.data);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(fetchArticles, []);

  return (
    <div>
      <h1>NewsFeed</h1>
      <ul>
        {
          Array.from(posts).map((post) => (
            <li key={post.uuid}>
              <a>{post.title}</a>
            </li>
          ))

        }
      </ul>
    </div>
  );
};

export default NewsFeed;
