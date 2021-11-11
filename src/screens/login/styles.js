import {StyleSheet} from 'react-native';
import {heightPixel,widthPixel,fontPixel} from '../../responsive';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingHorizontal: widthPixel(30),
  },
  topContent: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    color: '#27dd93',
    fontWeight: 'bold',
    fontSize: fontPixel(30),
    textAlign: 'center',
    marginBottom: heightPixel(15),
  },
  subtitle: {
    fontSize: fontPixel(16),
    color: '#585a60',
    textAlign: 'center',
  },
  middleContent: {flex: 1, width: '100%', justifyContent: 'center'},
  bottomContent: {flex: 1, width: '100%', justifyContent: 'center'},

  placeHolfer: {
    color: '#585a60',
  },
  input: {
    width: '100%',
    height: heightPixel(60),
    backgroundColor: '#ffffff',
    marginBottom: heightPixel(15),
    borderRadius: 15,
    justifyContent: 'center',
    paddingHorizontal: widthPixel(15),
    color: '#000000',
    width: '100%',
    borderWidth: 1,
    borderColor: '#585a60',
  },
});

export default styles;
