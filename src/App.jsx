import { Provider } from 'react-redux';
import { RootRouter } from 'router/router';

import store from './stores';

import './App.css';

export const App = () => {
  return (
    <Provider store={store}>
      <RootRouter />
    </Provider>
  );
};
