import api from '../../api';
import Toast from 'react-native-simple-toast';
import {resetNavigation} from '../../navigationRef';

const displayMessage = message => {
  Toast.show(message, Toast.SHORT);
};

function loginAttempt() {
  return {
    type: 'LOGIN_ATTEMPT',
  };
}

function loginSuccess() {
  return {
    type: 'LOGIN_SUCCESS',
  };
}

function loginFailed() {
  return {
    type: 'LOGIN_FAILED',
  };
}

const loginAccount = data => async dispatch => {
  const EMAIL = 'abcd@gmail.com';
  const PASSWORD = 'Abcd@404';
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  const {email, password} = data;
  if (email.length == 0) {
    displayMessage('Please enter email address');
  } else if (reg.test(email) == false) {
    displayMessage('Please enter valid email address');
  } else if (password.length == 0) {
    displayMessage('Please enter password');
  } else if (password.length < 4) {
    displayMessage('Password must be at least four characters');
  } else {
    dispatch(loginAttempt());

    if (email === EMAIL && password === PASSWORD) {
      dispatch(loginSuccess());
      displayMessage('Login successful');
      resetNavigation('Main');
    } else {
        dispatch(loginFailed());
      displayMessage('Invalid email address or password');
    }
  }
};

export default loginAccount;
