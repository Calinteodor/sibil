import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import MenuButton from '../../../../../components/common/MenuButton'
import AddPlayer from '../ManagePlayersPage/pages/AddPlayer';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import * as playerActions from '../../../../../../src/redux/actions/playerActions';


export function ManagePlayersPage(props) {
  React.useEffect(() => {
    props.dispatch(playerActions.loadPlayers(players))
  },[players])
  
  return (
    <div style={{margin: 24}}>
      <h3 style={{float: 'left', margin: 0}}>Manage Players</h3>
      <AddPlayer/>
      <Table aria-label="caption table">
        <TableHead>
          <TableRow>
            <TableCell align='left'>Name</TableCell>
            <TableCell align='right'>Age</TableCell>
            <TableCell align='right'>Team</TableCell>
            <TableCell align='right'>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.players.map(player => (
            <TableRow key={player.id}>
              <TableCell align='left'>{player.name}</TableCell>
              <TableCell align='right'>{player.age}</TableCell>
              <TableCell align='right'>{player.team}</TableCell>
              <TableCell align='right'><MenuButton/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

ManagePlayersPage.propTypes = {
  players: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    players: state.players
  }
}

export default connect(mapStateToProps)(ManagePlayersPage);