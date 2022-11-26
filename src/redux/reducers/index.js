import { combineReducers } from 'redux';
import modalsReducer from './modals';
import newsReducer from './news';

export default combineReducers({
  modals: modalsReducer,
  news: newsReducer,
});
