import {StyleSheet} from 'react-native';
import {
  widthPixel,
  heightPixel,
  fontPixel,
} from '../../responsive';

const styles = StyleSheet.create({
  container: {
    top: 100,
    justifyContent: 'flex-end',
    alignItems: 'center',
    ...StyleSheet.absoluteFillObject,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  image: {
    borderRadius: 50,
    height: 50,
    width: 50,
    marginRight: widthPixel(10),
  },
  title: {
    fontSize: fontPixel(16),
    color: '#000',
    marginBottom: heightPixel(10),
  },
  mapCard: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#ffffff',
    marginBottom: 50,
  },
});

export default styles;
