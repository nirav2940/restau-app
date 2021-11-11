import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Rating} from 'react-native-ratings';

import {heightPixel, fontPixel, widthPixel} from '../responsive';
import Ripple from 'react-native-material-ripple';

const RestaurantCard = ({data, action}) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContent}>
        <Image source={{uri: data.img[1].image}} style={styles.image} />
        <View>
          <Text style={styles.title}>{data.title}</Text>
          <Rating
            imageSize={15}
            readonly
            count={5}
            ratingCount={data.rating}
            style={styles.rating}
          />
        </View>
      </View>
      <Ripple style={styles.mapButton} onPress={action}>
        <Image
          source={require('../assets/icons/map-pin.png')}
          resizeMode="contain"
          style={styles.mapPin}
        />
      </Ripple>
    </View>
  );
};

export default RestaurantCard;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    padding: heightPixel(20),
    marginBottom: heightPixel(10),
    borderRadius: 10,
    alignItems: 'center',
  },
  image: {
    borderRadius: 5,
    height: heightPixel(80),
    width: widthPixel(80),
    marginRight: widthPixel(30),
  },
  title: {
    fontSize: fontPixel(16),
    color: '#000',
    marginBottom: heightPixel(10),
  },
  mapButton: {
    borderRadius: 5,
    height: heightPixel(50),
    width: widthPixel(50),
    backgroundColor: '#27dd93',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapPin: {
    height: heightPixel(24),
    width: widthPixel(24),
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    alignSelf: 'flex-start',
  },
});
