const INITIAL_STATE = {
 list:[],
 isLoading:false
};

const RestaurantsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'RESTAURANTS_ATTEMPT':
      return {
        ...state,
        isLoading: true,
      };
      break;
    case 'RESTAURANTS_SUCCESS':
      return {
        ...state,
        list: action.data,
        isLoading: false,
      };
      break;
    case 'RESTAURANTS_FAILED':
      return {
        ...state,
        isLoading: false,
      };
      break;
    default:
      return state;
  }
};

export default RestaurantsReducer;
