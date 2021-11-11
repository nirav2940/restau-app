import React from 'react';
import {StyleSheet, Text} from 'react-native';
import Ripple from 'react-native-material-ripple';
import {fontPixel} from '../responsive';

const HeaderLeft = ({action}) => {
  return (
    <Ripple onPress={action}>
      <Text style={styles.title}>Back</Text>
    </Ripple>
  );
};

export default HeaderLeft;

const styles = StyleSheet.create({
  title: {
    color: '#ffffff',
    justifyContent: 'center',
    fontSize: fontPixel(20),
  },
});
