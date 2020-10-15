import React from "react";
import './style.scss';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

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
    </>
  )
}


export default TabBar;