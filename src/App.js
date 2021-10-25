import React from "react";
import { Switch, Route } from "react-router-dom";
import { Layout } from "antd";
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import routes from "./routes";
import "./index.css";

function App() {
  const showContentNavbar = (routes) => {
    if (!routes.length) return;
    let result = null;

    result = routes.map(({ path, exact, main }, index) => (
      <Route key={index} path={path} exact={exact} component={main} />
    ));

    return result;
  };

  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Switch>
              {showContentNavbar(routes)}
            </Switch>
          </div>
        </Layout>
        <Footer />
      </div>
    </div>
  );
}

export default App;
