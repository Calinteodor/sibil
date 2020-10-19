import React from 'react';
import { Redirect, Route, Switch } from "react-router-dom";
import './App.scss';
import LogInPage from './components/pages/LogIn';
import HomePage from './components/pages/Home';

function App() {
  return (
    <div>
      <Switch>
        <Redirect exact from="/" to="/login"/>
        <Route path="/login" component={LogInPage} />
        <Redirect exact from="/home" to="/home/players"/>
        <Route path="/home/:page?" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
