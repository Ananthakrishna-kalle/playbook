import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, FormHelperText } from '@material-ui/core';

const SelectFieldGroup = ({
    name,
    value,
    label,
    error,
    info,
    onChange,
    startTimes
}) => {
    return(
        <FormControl fullWidth={true} variant="outlined" margin="normal">
            <InputLabel id="demo-simple-select-filled-label">{label}</InputLabel>
            <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                label={label}
                name={name}
                value={value}
                onChange={onChange}
                error={error ? true : false}
            >
            <MenuItem value={value}>
                <em>Choose Start Time</em>
            </MenuItem>
            {startTimes.map(time => {
                return <MenuItem key={time} time={time}>{time}</MenuItem>
            })}
            </Select>
            <FormHelperText error>{error}</FormHelperText>
      </FormControl>
    );
};

export default SelectStartTime;