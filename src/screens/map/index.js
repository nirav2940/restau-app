import React, {useEffect, useLayoutEffect, useState} from 'react';
import {View, Image, Text, PermissionsAndroid, Platform} from 'react-native';
import styles from './styles';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {Rating} from 'react-native-ratings';
import Geolocation from '@react-native-community/geolocation';
import HeaderLeft from '../../components/headerLeft';

const Map = props => {
  const {navigation, route} = props;
  const {long, lat, image, rating, title} = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <HeaderLeft action={() => navigation.goBack()} />,
    });
  }, [navigation]);

  const [currentLongitude, setCurrentLongitude] = useState(0);
  const [currentLatitude, setCurrentLatitude] = useState(0);

  const requestLocationPermission = async () => {
    if (Platform.OS === 'ios') {
      getGeoLocation();
    } else {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Access Required',
            message: 'This App needs to Access your location',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          getGeoLocation();
        }
      } catch (err) {
        console.warn(err);
      }
    }
  };

  const getGeoLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        const currentLongitude = JSON.stringify(position.coords.longitude);
        const currentLatitude = JSON.stringify(position.coords.latitude);
        setCurrentLongitude(currentLongitude);
        setCurrentLatitude(currentLatitude);
      },
      error => {},
      {
        enableHighAccuracy: false,
        timeout: 30000,
        maximumAge: 1000,
      },
    );
  };

  useEffect(() => {
    var isMount = true;
    if (isMount) requestLocationPermission();
    return () => {
      isMount = false;
    };
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: parseFloat(lat),
          longitude: parseFloat(long),
          latitudeDelta: 0.1,
          longitudeDelta: 0.01,
        }}
        style={styles.map}>
        <Marker
          coordinate={{
            latitude: parseFloat(lat),
            longitude: parseFloat(long),
          }}>
          <View style={styles.mapCard}>
            <Image source={{uri: image}} style={styles.image} />
            <View>
              <Text style={styles.title}>{title}</Text>
              <Rating
                imageSize={15}
                readonly
                count={5}
                ratingCount={rating}
                style={styles.rating}
              />
            </View>
          </View>
        </Marker>
        <MapViewDirections
          origin={{
            latitude: parseFloat(currentLatitude),
            longitude: parseFloat(currentLongitude),
          }}
          destination={{
            latitude: parseFloat(lat),
            longitude: parseFloat(long),
          }}
          apikey="AIzaSyC8itK062LvC8lgy3lfkhQ4oGpp45BkJgE"
          strokeWidth={4}
          strokeColor="#111111"
        />
        <Marker
          coordinate={{latitude: parseFloat(lat), longitude: parseFloat(long)}}
        />
        <Marker
          coordinate={{
            latitude: parseFloat(currentLatitude),
            longitude: parseFloat(currentLongitude),
          }}
        />
      </MapView>
    </View>
  );
};

Map.propTypes = {
  provider: MapView.ProviderPropType,
};

export default Map;
