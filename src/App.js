import React from 'react';
import { Switch, Route, Redirect } from "wouter";
import './styles/App.scss';
import Home from './pages/Home';
import User from './pages/User';

function App() {
  return (
    <Switch>
      <Route component={Home} path='/users' />
      <Route component={User} path='/users/:email' />
      <Redirect to="/users"></Redirect>
    </Switch>
  );
}

export default App;
