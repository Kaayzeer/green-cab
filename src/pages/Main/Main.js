import { Switch, Route } from "react-router-dom";

import Landing from "./Landing";
import Search from "./Search";
import Cars from "./Cars";
import Chart from "./Chart";
import Booking from "./Booking";

function Main() {
  return (
    <>
      <Switch>
        <Route path="/booking">
          <Booking />
        </Route>
        <Route path="/chart">
          <Chart />
        </Route>
        <Route path="/cars">
          <Cars />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/">
          <Landing />
        </Route>
      </Switch>
    </>
  );
}

export default Main;
