import React from 'react';
import { Route, Switch } from "react-router-dom";
import './App.scss';
import LogInPage from './components/pages/LogIn';
import HomePage from './components/pages/Home';
import ManagePlayersPage from './components/pages/Home/pages/ManagePlayersPage'
import ManageTeamsPage from './components/pages/Home/pages/ManageTeamsPage'
import ManageTournamentsPage from './components/pages/Home/pages/ManageTournamentsPage'

function App() {
  return (
    <div>
        <Switch>
            <Route exact path="/" component={LogInPage} />
            <Route path="/home" component={HomePage} />
            <Route path="/home/players" component={ManagePlayersPage} />
            <Route path="/home/teams" component={ManageTeamsPage} />
            <Route path="/home/tournaments" component={ManageTournamentsPage} />
        </Switch>
    </div>
  );
}

export default App;
