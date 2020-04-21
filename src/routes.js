import React from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "./pages/homepage/homepage";
import Shop from './pages/shop/shop.component';
import Login from './pages/login/login.component';

const Routes = () => (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/carros" component={Shop} />
      <Route exact path="/login" component={Login} />
    </Switch>
)

export default Routes;