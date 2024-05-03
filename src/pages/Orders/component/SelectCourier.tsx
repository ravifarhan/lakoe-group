import { Box, Checkbox, FormControl, InputLabel, ListItemText, MenuItem, OutlinedInput, Select, SelectChangeEvent } from "@mui/material";
import { useState } from "react";

const names = [
  'GoSend',
  'GrabExpress',
  'AnterAja',
  'JNE',
  'J&T',
  'Lion Parcel',
  'Ninja Xpress',
  'Pos Indonesia',
];

const SelectCourier = () => {
  const [courierName, setCourierName] = useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof courierName>) => {
    const {
      target: { value },
    } = event;
    setCourierName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  return (
    <Box width={'30%'}>
      <FormControl sx={{ width: '100%', bgcolor: '#f6f4ff'}} size="small">
        <InputLabel id="demo-multiple-checkbox-label">Kurir</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          value={courierName}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(', ')}
          // MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={courierName.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  )
}

export default SelectCourier