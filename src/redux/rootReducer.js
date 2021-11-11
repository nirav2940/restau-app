import {combineReducers} from 'redux';
import LoginReducer from '../screens/login/reducer';
import RestaurantsReducer from '../screens/restaurants/reducer';

const rootReducer = combineReducers({
  LoginReducer,
  RestaurantsReducer
});

export default rootReducer;
