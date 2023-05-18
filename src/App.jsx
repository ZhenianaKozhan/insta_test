import { Provider } from 'react-redux';
// eslint-disable-next-line import/no-unresolved
import { RootRouter } from 'router';

import store from './redux/store';

export const App = () => {
  return (
    <Provider store={store}>
      <RootRouter />
    </Provider>
  );
};
