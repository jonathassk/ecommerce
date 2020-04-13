import React from "react";
import {BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "./pages/homepage/homepage";
import Teste from './pages/teste'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/teste/:idTeste" component={Teste} />
    </Switch>
  </BrowserRouter>
)

export default Routes;