import React, {useState} from "react";
import  { makeStyles }  from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {connect} from 'react-redux';
import * as playerActions from '../../../../../../../redux/actions/playerActions';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const AddPlayer = (props) => {
  const classes = useStyles();
  const [player, setState] = useState({name:''});
  const [open, setOpen] = useState(false);
  
  const handleChange = (e) => {
    setState({...player, [e.target.name]: e.target.value});
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    props.dispatch(playerActions.addPlayer(player));
  }
  
  const handleOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };
  
  return (
    <>
      <Button style={{float: 'right'}} variant="contained" color="secondary" onClick={handleOpen}>Add</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <form onSubmit={handleSubmit} className={classes.paper}>
            <h3>Add Player</h3>
            <input type="text" onChange={handleChange} name="name" value={player.name} />
            <Button type="submit" variant="contained" color="secondary" onClick={handleOpen}>Save</Button>
            {props.players.map(player => (
              <div key={player.name}>{player.name}</div>
            ))}
          </form>
        </Fade>
      </Modal>
    </>
  )
}

AddPlayer.propTypes = {
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    players: state.players
  }
}

export default connect(mapStateToProps)(AddPlayer);


