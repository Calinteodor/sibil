import React from "react";
import './style.scss';
import Header from "../../common/Header";
import Table from "../../common/Table"

const HomePage = () => {
    return (
        <>
          <Header/>
          <h3>Manage Players</h3>
          <Table/>
        </>
    )
}


export default HomePage;