import React, {useLayoutEffect, useEffect} from 'react';
import {View,RefreshControl, FlatList} from 'react-native';
import styles from './styles';
import {connect} from 'react-redux';
import {logOut, restaurantsList} from './action';
import HeaderLeft from '../../components/headerLeft';
import RestaurantCard from '../../components/restaurantCard';

const Restaurants = props => {

  const {logOut, isLoading, navigation, List, getList} = props;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <HeaderLeft action={() => logOut()} />,
    });
  }, [navigation]);

  useEffect(() => {
    List.length==0 && getList();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        refreshing={isLoading}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        data={List}
        contentContainerStyle={styles.list}
        renderItem={({item}) => {
          return (
            <RestaurantCard
              data={item}
              action={() =>
                navigation.navigate('Map', {
                  long: item.long,
                  lat: item.lat,
                  image: item.img[0].image,
                  rating: item.rating,
                  title: item.title,
                })
              }
            />
          );
        }}
        onRefresh={() => {
          getList();
        }}
      />
    </View>
  );
};

const mapStateToProps = state => ({
  List: state.RestaurantsReducer.list,
  isLoading: state.RestaurantsReducer.isLoading,
});

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(logOut()),
  getList: () => dispatch(restaurantsList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Restaurants);
