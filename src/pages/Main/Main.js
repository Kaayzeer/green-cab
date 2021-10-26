import { Switch, Route } from "react-router-dom";

import Landing from "./Landing";
import Search from "./Search";
import Cars from "./Cars";

function Main() {
  return (
    <>
      <Switch>
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
