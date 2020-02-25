import { AsyncStorage } from 'react-native';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import reducers from '../reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2
};

const persistedReducer = persistReducer(
  persistConfig,
  reducers
);

export const store = createStore(persistedReducer, {}, compose(applyMiddleware(thunk)));

export const persistor = persistStore(store);
//persistor.purge();
export const purge = () => {
  persistor.purge();
}
