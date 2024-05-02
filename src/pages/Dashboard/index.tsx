import { Avatar, Box, InputAdornment, StyledEngineProvider, TextField, Typography } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import './index.css'
import TotalProducts from './component/TotalProducts';
import TotalCustomers from './component/TotalCustomers';
import TotalOrders from './component/TotalOrders';
import TotalSales from './component/TotalSales';
import { BarChart, LineChart } from '@mui/x-charts';

const lastYear = [40000, 30000, 20000, 27800, 18900, 23900, 34900, 38000, 39008, 48000, 38000, 43000];
const currentYear = [24000, 13980, 58000, 39008, 48000, 38000, 43000, 27800, 18900, 23900, 34900, 38000];
const xLabels = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export default function Dashboard() {
  return (
    <StyledEngineProvider injectFirst>
      <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} p={2} boxShadow={4}>
        <Box display={'flex'} gap={2} alignItems={'center'}>
          <Typography sx={{fontWeight: 'bolder', color: 'black'}}>Hello, Sutan Arief &#x1F44B;</Typography>
        </Box>
        <Box display={'flex'} alignItems={'center'} gap={2}>
          <Box sx={{ bgcolor: '#f6f4ff', p: 1, borderRadius: '155px', width: '500px' }}>
            <TextField id="search" placeholder={`Search your products`} variant='standard'
              fullWidth
              InputLabelProps={{ shrink: false }}
              InputProps={{
                disableUnderline: true, startAdornment: (
                  <InputAdornment position='start'>
                    <SearchIcon />
                  </InputAdornment>
                )
              }} />
          </Box>
          <Box>
            <NotificationsIcon sx={{ width: 30, height: 30, color: 'GrayText' }} />
          </Box>
          <Box display={'flex'} alignItems={'center'} gap={2}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: 50, height: 50 }} />
            <Typography sx={{fontWeight: 'bolder', color: 'black'}}>Sutan Arief</Typography>
          </Box>
        </Box>
      </Box>
      <Box display={'flex'} color={'black'} padding={4} gap={4}>
        <TotalCustomers />
        <TotalProducts />
        <TotalOrders />
        <TotalSales />
      </Box>
      <Box display={'flex'} p={2} gap={5}>
        <Box bgcolor={'#f7f5ff'} flex={1.5}>
          <LineChart
            height={350}
            series={[
              { data: currentYear, label: 'Current Year', color: '#ac92fd' },
              { data: lastYear, label: 'Last Year', color: '#fa2833' },
            ]}
            xAxis={[{ scaleType: 'band', data: xLabels }]}
          />
        </Box>
        <Box bgcolor={'#f7f5ff'} flex={1}>
          <BarChart
            xAxis={[{ scaleType: 'band', data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] }]}
            yAxis={[{ max: 16000 }]}
            series={[
              { data: [8000, 7000, 6000, 8000, 10000, 9500, 10000], label: 'Last Week', color: '#fa2833' },
              { data: [11000, 9000, 12000, 10000, 14000, 13000, 14000], label: 'This Week', color: '#ac92fd' }
            ]}
            height={350}
          />
        </Box>
      </Box>
    </StyledEngineProvider>
  );
}