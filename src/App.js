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
import PrivateRoute from "./views/routes/PrivateRoute.js";
// others

import { store } from "store";
import { loadUser } from "_actions/user.actions.js";

function App() {

  React.useEffect(() => {
    const token = localStorage.getItem("token");
      if (token) {
        store.dispatch(loadUser());
      }
  }, [])
  
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/index" render={(props) => <Index {...props} />} />
        <Route
          path="/landing-page"
          render={(props) => <LandingPage {...props} />}
        />
      {/*  <Route
          path="/profile-page"
          render={(props) => <ProfilePage {...props} />}
        />*/}
        <PrivateRoute path="/profile-page" component={ProfilePage} />
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
