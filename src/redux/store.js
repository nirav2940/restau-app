import AsyncStorage from '@react-native-async-storage/async-storage';
import {compose, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

import {persistStore, persistReducer} from 'redux-persist';
const middlewares = [thunk];

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['LoginReducer', 'RestaurantsReducer'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const enhancer = compose(applyMiddleware(...middlewares));
let store = createStore(persistedReducer, enhancer);
let persistor = persistStore(store);

export {store, persistor};
