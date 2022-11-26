export const FETCH_NEWS = 'FETCH_NEWS';
export const RECEIVED_NEWS = 'RECEIVED_NEWS';

export const fetchNews = (payload) => ({
  type: FETCH_NEWS,
  payload,
});

export const receivedNews = (payload) => ({
  type: RECEIVED_NEWS,
  payload,
});
