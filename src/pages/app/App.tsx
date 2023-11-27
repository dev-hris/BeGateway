import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Layout from "../../layout/Layout";
import Home from "../home/Home";
import Contacts from "../contacts/Contacts";
import ForDevelopers from "../forDevelopers/ForDevelopers";
import PciDssCertificate from "../pciDssCertificate/PciDssCertificate";
import ReliabilitySafety from "../reliabilitySafety/ReliabilitySafety";
import Integrations from '../integrations/Integrations';
import PrivacyPolicy from "../privacyPolicy/PrivacyPolicy";
import Page404 from "../page404/Page404";
import Sitemap from "../sitemap/Sitemap";

import { PATH } from "../../utils/constants/routeConstants";

export const App: React.FunctionComponent = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Routes>
      <Route
        path={PATH.home}
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path={PATH.contacts()}
        element={
          <Layout>
            <Contacts />
          </Layout>
        }
      />
      <Route
        path={PATH.features("integrations")}
        element={
          <Layout>
            <Integrations />
          </Layout>
        }
      />
      <Route
        path={PATH.resources('privacyPolicy')}
        element={
          <Layout>
            <PrivacyPolicy />
          </Layout>
        }
      />
      <Route
        path={PATH.sitemap}
        element={
          <Layout>
            <Sitemap />
          </Layout>
        }
      />
      <Route 
        path={PATH.reliabilitySafety}
        element={
          <Layout>
            <ReliabilitySafety />
          </Layout>
        }
      />
      <Route
      path={PATH.company('PCIDSScertificate')}
      element={
        <Layout>
          <PciDssCertificate />
        </Layout>
      }
      />
      <Route
      path={PATH.developers}
      element={
        <Layout>
          <ForDevelopers />
        </Layout>
      }
      />
      <Route
        path={"*"}
        element={
          <Layout>
            <Page404 />
          </Layout>
        }
      />
    </Routes>
  );
};

export default App;
