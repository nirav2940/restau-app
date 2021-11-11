import api from '../../api';
import Toast from 'react-native-simple-toast';
import {resetNavigation} from '../../navigationRef';

function attempt() {
  return {
    type: 'RESTAURANTS_ATTEMPT',
  };
}

function success(data) {
  return {
    type: 'RESTAURANTS_SUCCESS',
    data,
  };
}

function failed() {
  return {
    type: 'RESTAURANTS_FAILED',
  };
}

export const restaurantsList = () => async dispatch => {
  dispatch(attempt());

  try {
    const response = await api.get('/restaurants_list');
    const result = response.data;

    dispatch(success(result.data));
  } catch (err) {
    dispatch(failed());
  }
};

export const logOut = () => async dispatch => {
  dispatch({type: 'LOGOUT'});
  dispatch({type: 'RESTAURANTS_SUCCESS', data: []});
  Toast.show('Logout successful', Toast.SHORT);
  resetNavigation('Auth');
};
