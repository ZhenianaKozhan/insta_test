import { Home } from 'pages/index';
import { BrowserRouter, Route } from 'react-router-dom';

export const RootRouter = () => {
  return (
    <BrowserRouter>
      <Route path='/' component={Home} />
    </BrowserRouter>
  );
};
