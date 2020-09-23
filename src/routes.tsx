import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/Home';
import Landing from './pages/Landing';
import Login from './pages/Login';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/login" component={Login} />
      <Route path="/home" component={Home} />
    </BrowserRouter>
  )
}

export default Routes;