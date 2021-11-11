import React from 'react';
import {StatusBar} from 'react-native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {connect} from 'react-redux';
import LoginScreen from './screens/login';
import Restaurants from './screens/restaurants';
import Map from './screens/map';

const Auth = createNativeStackNavigator();
const MainStack = createNativeStackNavigator();
const AppStack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <Auth.Navigator
      screenOptions={props => ({
        headerShown: false,
        gestureEnabled: false,
        cardOverlayEnabled: true,
        animation: 'slide_from_right',
        headerStyle: {
          backgroundColor: '#27dd93',
        },
      })}>
      <Auth.Screen name="Login" component={LoginScreen} />
    </Auth.Navigator>
  );
};

const MainNavigation = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#27dd93" />
      <MainStack.Navigator
        screenOptions={props => ({
          gestureEnabled: false,
          cardOverlayEnabled: true,
          animation: 'slide_from_right',
          headerStyle: {
            backgroundColor: '#27dd93',
          },
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
        })}>
        <MainStack.Screen
          name="Restaurants"
          options={{
            title: 'Restaurant List',
          }}
          component={Restaurants}
        />
        <MainStack.Screen
          name="Map"
          options={{
            title: 'Map View',
          }}
          component={Map}
        />
      </MainStack.Navigator>
    </>
  );
};

const AppNavigation = ({isLoggedIn}) => {
  return (
    <AppStack.Navigator
      initialRouteName={isLoggedIn?"Main":"Auth"}
      screenOptions={props => ({
        headerShown: false,
        gestureEnabled: false,
        cardOverlayEnabled: true,
        animation: 'slide_from_right',
      })}>
      <AppStack.Screen name="Main" component={MainNavigation} />
      <AppStack.Screen name="Auth"  component={AuthNavigation} />
    </AppStack.Navigator>
  );

  // return(<>
  //   {!isLoggedIn ?
  //     <AuthNavigation />: <MainNavigation />
  //   }
  // </>)
};

const mapStateToProps = state => ({
  isLoggedIn: state.LoginReducer.isLoggedIn,
});

export default connect(mapStateToProps, null)(AppNavigation);
// export default AppNavigation;
