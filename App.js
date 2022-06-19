import React from 'react';
import {Provider} from 'react-redux';
import store from './app/store/storeConfig';
import MainScreen from './app/screens/MainScreen/MainScreen';

const App = () => {
  return (
    <Provider store={store()}>
      <MainScreen />
    </Provider>
  );
};
export default App;
