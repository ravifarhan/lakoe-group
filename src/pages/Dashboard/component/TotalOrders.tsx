import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import { Box, Typography } from '@mui/material';

const TotalOrders = () => {
  return (
    <Box flex={1} p={3} bgcolor={'#f7f5ff'} justifyContent={'center'} textAlign={'center'} display={'flex'} gap={2} alignItems={'center'}>
      <Box bgcolor={'#ffdada'} p={1}>
        <ReceiptLongIcon sx={{ color: '#ff2229', width: 30, height: 30 }} />
      </Box>
      <Box>
        <Typography className='title' textAlign={'start'}>1600+</Typography>
        <Typography >Total Orders</Typography>
      </Box>
    </Box>
  )
}

export default TotalOrders