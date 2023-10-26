import React, {useEffect} from 'react';
import {Routes, Route, useLocation} from 'react-router-dom';

import Layout from '../../layout/Layout';
import Home from '../home/Home';

import {PATH} from '../../utils/constants/routeConstants';

export const App: React.FunctionComponent = () => {
  const {pathname} = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Routes>
      <Route
        path={PATH.home}
        element={
          <Layout>
            <Home/>
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
