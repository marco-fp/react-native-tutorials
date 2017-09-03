import React from 'react';
import { Provider } from 'react-redux';
import store from './app/store';
import MainView from './app/containers/MainView';

const App = () => (
  <Provider store={store}>
    <MainView />
  </Provider>
);

export default App;
