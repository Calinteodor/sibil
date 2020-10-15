import React from "react";
import {Button} from "@material-ui/core";
import './style.scss';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const HeaderButtons = () => {
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
    <div className="header-buttons">
      <Button className="log-out-button" style={styles.logOutBtn}>
        <ExitToAppIcon style={styles.logOutIcon}/>
      </Button>
      <Button className="log-out-button" style={styles.logOutBtn}>
        <HelpOutlineIcon style={styles.logOutIcon}/>
      </Button>
    </div>
  )
}


export default HeaderButtons;