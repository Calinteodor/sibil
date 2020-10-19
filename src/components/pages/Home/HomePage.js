import React from "react";
import './style.scss';
import Header from "../../common/Header";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import ManagePlayersPage from "../../pages/Home/pages/ManagePlayersPage";
import ManageTeamsPage from '../../pages/Home/pages/ManageTeamsPage'
import ManageTournamentsPage from '../../pages/Home/pages/ManageTournamentsPage'

const HomePage = (props) => {
  
  const {match, history} = props;
  const {params} = match;
  const {page} = params;
  
  const tabNameToIndex = {
    0: "players",
    1: "teams",
    2: "tournaments"
  }
  
  const indexToTabName = {
    players: 0,
    teams: 1,
    tournaments: 2
  }
  const [selectedTab, setSelectedTab] = React.useState(indexToTabName[page]);
  
  const handleChange = (event, newValue) => {
    history.push(`/home/${tabNameToIndex[newValue]}`)
    setSelectedTab(newValue);
  };
  
  return (
    <div className="home-page-container">
      <Header/>
      <Tabs
        className="tab-list"
        value={selectedTab}
        onChange={handleChange}
      >
        <Tab label="Players" />
        <Tab label="Teams" />
        <Tab label="Tournaments" />
      </Tabs>
      { selectedTab === 0 && <ManagePlayersPage/>}
      { selectedTab === 1 && <ManageTeamsPage/>}
      { selectedTab === 2 && <ManageTournamentsPage/>}
    </div>
  )
}

export default HomePage;