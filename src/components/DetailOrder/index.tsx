import { Box, Breadcrumbs, Typography } from '@mui/material'
import { Link } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import TrackingOrderCard from '../TrackingOrder/TrackingOrderCard';

const DetailOrder = () => {

  return (
    <Box bgcolor={'#f8f8f8'} height={'100vh'} p={4}>
      <Box mb={'30px'}>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb">
          <Link key="1" color="inherit" to="/orders" style={{ textDecoration: 'none' }}>
            <Typography color={'#0eadd7'} fontWeight={'bold'} fontSize={'large'}>Daftar Pesanan</Typography>
          </Link>,
          <Typography key="2" color="text.primary">
            <Typography color={'black'} fontWeight={'bold'} fontSize={'large'}>CREWNECK BASIC-BLACK ...</Typography>
          </Typography>,
        </Breadcrumbs>
      </Box>
      <TrackingOrderCard />
    </Box>
  )
}

export default DetailOrder