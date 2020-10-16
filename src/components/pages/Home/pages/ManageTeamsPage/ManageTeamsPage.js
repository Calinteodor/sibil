import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import MenuButton from '../../../../../components/common/MenuButton'


function createData(name, age, team, actions) {
  return { name, age, team, actions };
}

const rows = [
  createData('Frozen yoghurt', 15, '-', <MenuButton/>),
  createData('Ice cream sandwich', 27, '-', <MenuButton/>),
  createData('Eclair', 14, '-', <MenuButton/>),
];

export default function ManageTeamsPage() {
  
  return (
    <div style={{margin: 24}}>
      <h3>Manage Teams</h3>
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
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell align='left'>{row.name}</TableCell>
              <TableCell align='right'>{row.age}</TableCell>
              <TableCell align='right'>{row.team}</TableCell>
              <TableCell align='right'>{row.actions}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}