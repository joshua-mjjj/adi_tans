import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import "bootstrap/scss/bootstrap.scss";
import "assets/scss/paper-kit.scss?v=1.3.0";
import "assets/demo/demo.css?v=1.3.0";

// pages
import Index from "./views/Index.js";
import LandingPage from "./views/routes/LandingPage.js";
import ProfilePage from "./views/routes/ProfilePage.js";
import RegisterPage from "./views/routes/RegisterPage.js";
import Login from "./views/routes/Login.js";
// others

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/index" render={(props) => <Index {...props} />} />
        <Route
          path="/landing-page"
          render={(props) => <LandingPage {...props} />}
        />
        <Route
          path="/profile-page"
          render={(props) => <ProfilePage {...props} />}
        />
        <Route
          path="/register"
          render={(props) => <RegisterPage {...props} />}
        />
        <Route path="/login" render={(props) => <Login {...props} />} />
        <Redirect to="/index" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
