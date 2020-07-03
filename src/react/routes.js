import React from "react";
import { Route } from "react-router-dom";
import Hoc from "./hoc/hoc";

import CustomTable from "./containers/CustomTable";
import Compare from "./containers/Compare";
import FoodList from "./containers/FoodList";
import Search from "./containers/Search";




const BaseRouter = () => (

  <Hoc>

    <Route exact path="/table/" component={CustomTable} />
    <Route exact path="/compare/" component={Compare} />
    <Route exact path="/food-list/" component={FoodList} />
    <Route exact path="/global-search/" component={Search} />

  </Hoc>
  
);

export default BaseRouter;
