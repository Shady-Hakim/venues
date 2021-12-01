import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './screens/home';
import Venue from './screens/venue';

const Routes = () => {
  
  return (
    <Switch>
      <Route path="/venue/:id">
        <Venue/>
      </Route>
      <Route path="/">
        <Home/>
      </Route>
    </Switch>
  );
};

export default Routes;
