import React from 'react';
import { Switch, Route } from "wouter";
import './App.scss';
import Home from './pages/Home';
import User from './pages/User';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route component={Home} path='/users' />
        <Route component={User} path='/users/:email' />
      </Switch>
    </div>
  );
}

export default App;
