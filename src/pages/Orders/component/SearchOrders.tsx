import { Box, InputAdornment, TextField } from '@mui/material'
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import { useState } from 'react';

const SearchOrders = () => {
  const [searchInput, setInputSearch] = useState('')
  console.log(searchInput, `ini search input`);
  

  return (
    <Box width={'40%'}>
      <Box sx={{ bgcolor: '#f6f4ff', p: 1, borderRadius: '10px', width: '100%'}}>
        <TextField id="search" placeholder={`Cari Pesanan`} variant='standard' sx={{textAlign: 'center'}} onChange={(e) => setInputSearch(e.target.value)}
          fullWidth
          InputLabelProps={{ shrink: false }}
          InputProps={{
            disableUnderline: true, startAdornment: (
              <InputAdornment position='start'>
                <ManageSearchIcon />
              </InputAdornment>
            )
          }} />
      </Box>
    </Box>
  )
}

export default SearchOrders