/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Navigator from './src/routes/homeStack';
import {Provider} from 'react-redux';
import store from './src/reducer/mapReducer';

const App = () => {
  return (
    <React.Fragment>
      <Provider store={store}>
        <Navigator />
      </Provider>
    </React.Fragment>
  );
};

export default App;
