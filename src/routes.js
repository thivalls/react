import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Cart from './pages/Cart';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} name="home" />
        <Route path="/repository" component={Cart} name="cart" />
      </Switch>
    </BrowserRouter>
  );
}
