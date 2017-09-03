import React from 'react';
import { Provider } from 'react-redux';
import store from './app/store';
import CounterView from './app/containers/CounterView';

const App = () => (
  <Provider store={store}>
    <CounterView />
  </Provider>
);

export default App;
