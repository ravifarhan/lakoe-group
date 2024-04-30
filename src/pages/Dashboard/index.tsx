import { Box, InputAdornment, StyledEngineProvider, TextField, Typography } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import './index.css'


export default function Dashboard() {
  return (
    <StyledEngineProvider injectFirst>
      <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} p={1}>
        <Box display={'flex'} gap={2} alignItems={'center'}>
          {/* <Typography className='title'>Dashboard</Typography> */}
          <Typography className='title'>Hello, Sutan Arief &#x1F44B;</Typography>
          <TextField id="search" placeholder={`Search your products`} variant='standard'
            sx={{ border: '1px solid black', height: '35px' }} InputLabelProps={{ shrink: false }}
            InputProps={{
              disableUnderline: true, startAdornment: (
                <InputAdornment position='start'>
                  <SearchIcon />
                </InputAdornment>
              )
            }} />
        </Box>
        <Box>
          <NotificationsIcon sx={{ width: 30, height: 30 }} />
        </Box>
      </Box>
    </StyledEngineProvider>
  );
}