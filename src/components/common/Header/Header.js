import React from "react";
import './style.scss';
import HeaderButtons from '../../common/HeaderButtons'
import TabBar from '../../common/TabBar'

const Header = () => {
    return (
      <div className="header-container">
          <h2>LOGO</h2>
          <TabBar/>
          <HeaderButtons/>
      </div>
    )
}


export default Header;