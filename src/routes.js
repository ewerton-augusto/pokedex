import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Pokedex from "./pages/Pokedex";
import Error404 from "./pages/Error404";

const Routes = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/pokedex" component={Pokedex} />
          <Route component={Error404} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Routes;
