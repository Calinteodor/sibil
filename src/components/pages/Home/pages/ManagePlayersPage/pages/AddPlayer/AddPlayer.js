import React, {useState} from "react";
import './style.scss';
import {connect} from 'react-redux';
import * as playerActions from '../../../../../../../redux/actions/playerActions';
import PropTypes from 'prop-types';
import { TextField, Button, Backdrop, Modal, Fade, Grid  } from '@material-ui/core'
import DatePicker from '../../../../../../common/DatePicker';

const AddPlayer = (props) => {
  const [open, setOpen] = useState(false);
  const [player, setPlayer] = useState(
    {
      id:null,
      name:'',
      team:'',
      dateBirth:''
    });
  
  const convertDateToAge = selectedDate => {
    let dateNow = new Date(),
      dateUser = new Date(selectedDate.toString());
    
    return Math.abs(dateNow.getFullYear() - dateUser.getFullYear());
  }
  
  const handleChange = (e) => {
    const {name, value } = e.target;
    
    setPlayer({...player,
      id: props.players.length,
      [name]: value
    });
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    props.dispatch(playerActions.addPlayer(player));
    handleClose()
  }
  
  const handleOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
    setPlayer({
      name:'',
      team:'',
      dateBirth:''
    })
  };
  
  return (
    <>
      <Button style={{float: 'right'}} variant="contained" color="secondary" onClick={handleOpen}>Add</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className='modal-container'
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <form onSubmit={handleSubmit} className='modal-form'>
            <h3>Add Player</h3>
            <div className='modal-content'>
              <TextField
                style={{marginTop: 0}}
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                onChange={handleChange}
                value={player.name}
              />
              <Grid container spacing={3} style={{marginTop: 16}}>
                <Grid item xs={6}>
                  <DatePicker id='birth-date'
                              label='Date of birth'
                              onChange={handleChange}
                              name='dateBirth'
                              value={player.dateBirth}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    style={{marginTop: 0}}
                    margin="normal"
                    required
                    fullWidth
                    id="team"
                    label="Team"
                    name="team"
                    onChange={handleChange}
                    value={player.team}
                  />
                </Grid>
              </Grid>
            </div>
            <div className="modal-footer-buttons">
              <Button className="cancel-button" color="secondary" onClick={handleClose}>Cancel</Button>
              <Button type="submit" variant="contained" color="secondary" onClick={handleOpen}>Save</Button>
            </div>
            {props.players.map(player => (
              <div key={player.name}>{player.name + convertDateToAge(player.dateBirth) + player.team}</div>
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


