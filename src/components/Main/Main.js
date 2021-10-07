import { useEffect, useState } from 'react';
import {
    Switch,
    Route,
  } from "react-router-dom";


import db from '../../constants/firebase'
import { onSnapshot, collection } from 'firebase/firestore';

import Landing from './Landing'
import Search from './Search'
import About from './About'


function Main({}) {

const [users, setUsers] = useState([{name: 'loading...', id: 'initial'}])

useEffect(() => {
  
onSnapshot(collection(db , "users" ), (snapshot) => 
setUsers(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
  )

}, [])
    return (
        <div>
            
            <Switch>
            <Route path="/about">
            <About />
          </Route>
          <Route path="/search">
          <Search />
          </Route>
          <Route path="/">
          <Landing users={users}/>
          </Route>
            
            
            </Switch>
        </div>
    )
}

export default Main


