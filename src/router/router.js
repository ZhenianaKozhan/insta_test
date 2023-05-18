// eslint-disable-next-line import/no-unresolved
import { Home } from 'pages/index';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const RootRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path='/' />
      </Routes>
    </BrowserRouter>
  );
};
