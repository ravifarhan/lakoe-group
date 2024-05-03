import { Box, Typography } from "@mui/material"
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

const TotalProducts = () => {
  return (
    <Box flex={1} p={3} bgcolor={'#f7f5ff'} justifyContent={'center'} textAlign={'center'} display={'flex'} gap={2} alignItems={'center'}>
      <Box bgcolor={'#ffefdb'} p={1}>
        <ShoppingBasketIcon sx={{ color: '#ffc955', width: 30, height: 30 }} />
      </Box>
      <Box>
        <Typography className='title' textAlign={'start'}>140+</Typography>
        <Typography >Total Products</Typography>
      </Box>
    </Box>
  )
}

export default TotalProducts