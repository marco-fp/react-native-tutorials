import React from 'react';

import { Provider } from 'react-redux';
import store from './app/store';

const App = () => (
  <Provider store={store}>
    <CounterView />
  </Provider>
);

export default App;
