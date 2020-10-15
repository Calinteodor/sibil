import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const style = {
  table: {
    position: 'fixed',
    marginRight: 8,
    minWidth: 650,
    right: 0,
    width: '88%',
  },
};

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
];

export default function AcccessibleTable() {
  
  return (
    <Table style={style.table} aria-label="caption table">
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
            <TableCell align='left'>{row.calories}</TableCell>
            <TableCell align='right'>{row.fat}</TableCell>
            <TableCell align='right'>{row.carbs}</TableCell>
            <TableCell align='right'>{row.protein}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}