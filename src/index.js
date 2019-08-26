import React from 'react';

import '~/config/ReactotronConfig';
import '~/config/StatusBarConfig';

import { Provider } from 'react-redux';
import store from './store';

import Routes from '~/routes';

import Player from '~/components/player/index';

const App = () => (
  <Provider store={store}>
    <Routes />
    <Player/>
  </Provider>
);

export default App;
