import { Box, Typography } from '@mui/material'
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';

const TotalSales = () => {
  return (
    <Box flex={1} p={3} bgcolor={'#f7f5ff'} justifyContent={'center'} textAlign={'center'} display={'flex'} gap={2} alignItems={'center'}>
      <Box bgcolor={'#ddefe1'} p={1}>
        <StackedLineChartIcon sx={{ color: '#54b475', width: 30, height: 30 }} />
      </Box>
      <Box>
        <Typography className='title' textAlign={'start'}>2000+</Typography>
        <Typography >Total Sales</Typography>
      </Box>
    </Box>
  )
}

export default TotalSales