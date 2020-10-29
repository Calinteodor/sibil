import React, {useState} from "react";
import  { makeStyles }  from '@material-ui/core/styles';
import './style.scss';
import {connect} from 'react-redux';
import * as playerActions from '../../../../../../../redux/actions/playerActions';
import PropTypes from 'prop-types';
import { TextField, Button, Backdrop, Modal, Fade, Select, MenuItem, InputLabel, Grid  } from '@material-ui/core'

function showAge(){
  let ageArr = [];
  
  for(let i = 5; i <= 40; i++) {
    ageArr.push(i);
  }
  return ageArr;
}

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
  const ages = showAge();
  const classes = useStyles();
  const [player, setPlayer] = useState(
    {
      id:null,
      name:'',
      age:'',
      team:''
    });
  const [open, setOpen] = useState(false);
  
  const handleChange = (e) => {
    const {name, value } = e.target;
    
    setPlayer({...player,
      id: props.players.length,
      [name]: value});
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    props.dispatch(playerActions.addPlayer(player));
    player.name = '';
    player.age = '';
    player.team = '';
    
    handleClose();
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
              <Grid item xs={2}>
                <InputLabel shrink id="age-label">
                  Age
                </InputLabel>
                <Select
                  id="age"
                  onChange={handleChange}
                  required
                  name="age"
                  displayEmpty
                  value={player.age}
                >
                  {ages.map((age) => (
                    <MenuItem key={age} value={age}>{age}</MenuItem>
                  ))}
                </Select>
              </Grid>
              <Grid item xs={10}>
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
            <div className="modal-footer-buttons">
              <Button className="cancel-button" color="secondary" onClick={handleClose}>Cancel</Button>
              <Button type="submit" variant="contained" color="secondary" onClick={handleOpen}>Save</Button>
            </div>
            {props.players.map(player => (
              <div key={player.name}>{player.name + player.age + player.team}</div>
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


