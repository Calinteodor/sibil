import React, { useState } from 'react'
import {Button} from "@material-ui/core";
import './style.scss';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Redirect } from 'react-router-dom';

const HeaderButtons = () => {
  const [redirect, setRedirect] = useState(false);
  
  function handleLogOut(e) {
    e.preventDefault();
    
    setRedirect(true);
  }
  const styles = {
    logOutBtn: {
      minWidth: 'unset',
      padding: 6
    },
    logOutIcon: {
      fontSize: '2rem'
    },
  }
  
  return (
    <>
      {redirect && <Redirect to='/' />}
      <div className="header-buttons">
        <Button className="log-out-button" style={styles.logOutBtn} onClick={handleLogOut}>
          <ExitToAppIcon style={styles.logOutIcon}/>
        </Button>
        <Button className="log-out-button" style={styles.logOutBtn} >
          <HelpOutlineIcon style={styles.logOutIcon}/>
        </Button>
      </div>
    </>
  )
}


export default HeaderButtons;