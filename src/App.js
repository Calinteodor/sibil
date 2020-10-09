import React from 'react';
import { Route, Switch } from "react-router-dom";
import './App.scss';
import LogInPage from './components/pages/log-in/LogInPage';
import HomePage from './components/pages/home/HomePage';

function App() {
  return (
    <div>
        <Switch>
            <Route exact path="/" component={LogInPage} />
            <Route path="/home" component={HomePage} />
        </Switch>
    </div>
  );
}

export default App;
