import React, { useState, useEffect } from "react";
import { useTheme } from '@mui/material/styles';
import { useDispatch } from "react-redux";
import { GridToolbarContainer, GridToolbarColumnsButton, GridToolbarFilterButton, GridToolbarExport, GridToolbarDensitySelector } from "@mui/x-data-grid";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface ToolbarProps {
  title: string
  selectionRow: any;

}



const Toolbar: React.FC<ToolbarProps> = props => {
  const { selectionRow, title } = props;
  const theme = useTheme();
  const dispatch = useDispatch();


  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
  
  React.useEffect(() => { }, [selectionRow]);

  return (
    <GridToolbarContainer>
      <GridToolbarColumnsButton sx={{mr:2, color: theme.palette.secondary.dark}}/>
      <GridToolbarFilterButton sx={{mr:2, color: theme.palette.secondary.dark}}/>
      <GridToolbarDensitySelector sx={{mr:2, color: theme.palette.secondary.dark}}/>
      <GridToolbarExport sx={{mr:2, color: theme.palette.secondary.dark}}/>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </GridToolbarContainer>
  );
}

export default Toolbar;