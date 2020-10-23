import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';

export default function MenuButton() {
  const [anchorEl, setAnchorEl] = useState(null);
  
  const handleClick = (event) => {
    event.preventDefault();
    
    setAnchorEl(event.currentTarget);
  };
  
  const handleDelete = () => {}
  
  const handleEdit = () => {}
  
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <MoreVertIcon />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleEdit}>Edit</MenuItem>
        <MenuItem onClick={handleDelete}>Delete</MenuItem>
      </Menu>
    </div>
  );
}