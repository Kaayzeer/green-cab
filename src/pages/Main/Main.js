
import {
    Switch,
    Route,
  } from "react-router-dom";

import Landing from './Landing'
import Search from './Search'
import Cars from './About'

function Main() {

    return (
        <div>
            
            <Switch>
            <Route path="/login">
            <Cars />
          </Route>
          <Route path="/search">
          <Search />
          </Route>
          <Route path="/">
          <Landing />
          </Route>
            
            
            </Switch>
        </div>
    )
}

export default Main


