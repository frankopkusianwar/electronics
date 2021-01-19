import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home'
import CategoryList from '../containers/CategoryList'

const Router = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/categories" component={CategoryList} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router
