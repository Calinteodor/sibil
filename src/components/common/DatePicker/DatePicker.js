import React from "react";
import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';

const DatePicker = ({id, label, className, value, onChange, name}) =>  {
  return (
    <>
      <TextField
        id={id}
        label={label}
        className={className}
        type="date"
        name={name}
        defaultValue={value}
        InputLabelProps={{
          shrink: true
        }}
        onChange={onChange}/>
    </>
  );
}

DatePicker.propTypes = {
  label: PropTypes.string.isRequired,
}

export default DatePicker;
