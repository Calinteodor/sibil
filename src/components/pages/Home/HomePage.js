import React from "react";
import './style.scss';
import Header from "../../common/Header";
import TabBar from '../../common/TabBar'

const HomePage = () => {
    return (
        <div className="home-page-container">
          <Header/>
          <TabBar/>
        </div>
    )
}


export default HomePage;