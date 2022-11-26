import { FETCH_NEWS, RECEIVED_NEWS } from '../actions/news';

const initialState = {
  loading: false,
  list: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_NEWS:
      return {
        ...state,
        loading: true,
      };

    case RECEIVED_NEWS:
      return {
        ...state,
        list: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default reducer;
