import React from 'react';
import {StyleSheet, Text, ActivityIndicator} from 'react-native';
import { heightPixel} from '../responsive';
import Ripple from 'react-native-material-ripple';

const Button = props => {
  const {title, action, isLoading} = props;
  return (
    <Ripple style={styles.button} disabled={isLoading} onPress={action}>
      {isLoading ? (
        <ActivityIndicator color="#ffffff" />
      ) : (
        <Text style={styles.title}>{title}</Text>
      )}
    </Ripple>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#27dd93',
    justifyContent: 'center',
    alignItems: 'center',
    height: heightPixel(60),
    width: '100%',
    borderRadius: 20,
  },
  title: {
    color: '#ffffff',
  },
});
