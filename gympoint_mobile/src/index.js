import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';

import 'react-native-gesture-handler';
import './config/ReactotronConfig';

import App from '~/App';

import { store, persistor } from '~/store';

export default function Index() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
        <App />
      </PersistGate>
    </Provider>
  );
}
