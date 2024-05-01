import { Box, Typography } from '@mui/material'
import GroupsIcon from '@mui/icons-material/Groups';

const TotalCustomers = () => {
  return (
    <Box flex={1} p={3} bgcolor={'#f7f5ff'} justifyContent={'center'} textAlign={'center'} display={'flex'} gap={2} alignItems={'center'}>
      <Box bgcolor={'#e3e0ff'} p={1}>
        <GroupsIcon sx={{ color: '#a78fed', width: 30, height: 30 }} />
      </Box>
      <Box>
        <Typography className='title' textAlign={'start'}>2000+</Typography>
        <Typography >Total Customers</Typography>
      </Box>
    </Box>
  )
}

export default TotalCustomers