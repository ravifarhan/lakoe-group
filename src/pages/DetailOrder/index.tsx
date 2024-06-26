import { Box, Breadcrumbs, Typography } from '@mui/material'
import { Link } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import TrackingOrderCard from './features/TrackingOrder/TrackingOrderCard';
import DetailInvoiceCard from './features/DetailInvoice/DetailInvoiceCard';
import DetailOrderCard from './features/DetailOrderCard/DetailOrderCard';
import DetailDelivery from './features/DetailDelivery/DetailDelivery';
import DetailPayment from './features/DetailPayment/DetailPayment';
import { useEffect, useState } from 'react';
import trackingOrderData from '../../mocks/TrackingOrderData.json'
import { ITrackingOrderProps } from '../../types';

const DetailOrder = () => {
  const [listTrackingOrder, setListTrackingOrder] = useState<ITrackingOrderProps[]>([]);

  useEffect(() => {
    setListTrackingOrder(trackingOrderData);
  }, []);

  return (
    <Box bgcolor={'#f8f8f8'} p={4} pb={10}>
      <Box mb={'30px'}>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb">
          <Link key="1" color="inherit" to="/orders" style={{ textDecoration: 'none' }}>
            <Typography color={'#0eadd7'} fontWeight={'bold'} fontSize={'large'}>Daftar Pesanan</Typography>
          </Link>
          <Typography color="text.primary" fontWeight={'bold'} fontSize={'large'}>CREWNECK BASIC-BLACK ...</Typography>
        </Breadcrumbs>
      </Box>
      <TrackingOrderCard list={listTrackingOrder} />
      <DetailInvoiceCard />
      <DetailOrderCard />
      <DetailDelivery />
      <DetailPayment />
    </Box>
  )
}

export default DetailOrder