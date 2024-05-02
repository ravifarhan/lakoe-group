import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import React from 'react'

const SortingOrders = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <Box width={'30%'}>
      <FormControl sx={{ width: '100%', bgcolor: '#f6f4ff' }} size="small">
      <InputLabel id="demo-select-small-label">Urutkan</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={age}
        label="Urutkan"
        onChange={handleChange}
      >
        <MenuItem value={'newer'}>Paling Baru</MenuItem>
        <MenuItem value={'older'}>Paling Lama</MenuItem>
        <MenuItem value={'fastResponse'}>Respons Tercepat</MenuItem>
        <MenuItem value={'slowResponse'}>Respons Terlama</MenuItem>
      </Select>
    </FormControl>
    </Box>
  )
}

export default SortingOrders