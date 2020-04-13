import React from "react";
import {BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "./pages/homepage/homepage";
import shop from './pages/shop/shop.component';
const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/carros" component={shop} />
    </Switch>
  </BrowserRouter>
)

export default Routes;