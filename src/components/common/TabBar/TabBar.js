import React from "react";
import './style.scss';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import ManagePlayersPage from "../../pages/Home/pages/ManagePlayersPage";
import ManageTeamsPage from '../../pages/Home/pages/ManageTeamsPage'
import ManageTournamentsPage from '../../pages/Home/pages/ManageTournamentsPage'
import TabPanel from "../TabPanel";

const TabBar = () => {
  const [value, setValue] = React.useState(0);
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  return (
    <>
      <Tabs
        className="tab-list"
        value={value}
        indicatorColor="secondary"
        textColor="secondary"
        onChange={handleChange}
      >
        <Tab label="Players" />
        <Tab label="Teams" />
        <Tab label="Tournaments" />
      </Tabs>
      <TabPanel index={0} value={value}>
        <ManagePlayersPage/>
      </TabPanel>
      <TabPanel index={1} value={value}>
        <ManageTeamsPage/>
      </TabPanel>
      <TabPanel index={2} value={value}>
        <ManageTournamentsPage/>
      </TabPanel>
    </>
  )
}


export default TabBar;