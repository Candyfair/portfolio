import GhostContentAPI from '@tryghost/content-api';

import { FETCH_NEWS, receivedNews } from '../redux/actions/news';

// Create API instance with site credentials
const api = new GhostContentAPI({
  url: process.env.GHOST_URL,
  key: process.env.GHOST_API_KEY,
  version: 'v4.0',
});

export default (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_NEWS:
      next(action);

      // fetch 5 posts, including related tags and authors
      api.posts.browse({
        filter: 'tag:news',
      })
        .then((posts) => {
          posts.forEach((post) => {
            console.log(post.published_at, post.title);
          });

          const newsAction = receivedNews(posts);
          store.dispatch(newsAction);
        })
        .catch((err) => {
          console.error(err);
        });

      break;

    default:
      next(action);
  }
};
