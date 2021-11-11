import {StyleSheet} from 'react-native';
import {heightPixel, widthPixel} from '../../responsive';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: widthPixel(20),
  },
  list: {paddingVertical: heightPixel(20)},
  loader: {
    paddingVertical: heightPixel(30),
  },
});

export default styles;
