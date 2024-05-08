import { Box, Typography } from "@mui/material"
import { FaTruckFast } from "react-icons/fa6";
import CopyIcon from "../Alerts/CopyIcon";
import ModalTrackingOrder from "../../components/ModalTrackingOrder";
import { ITrackingOrderProps } from "../../../../types";
import ModalTrackingOrderData from '../../../../mocks/ModalTrackingOrderData.json'
import { useEffect, useState } from "react";

const DetailDelivery = () => {
  const [listTrackingOrder, setListTrackingOrder] = useState<ITrackingOrderProps[]>([]);

  useEffect(() => {
    setListTrackingOrder(ModalTrackingOrderData);
  }, []);

  return (
    <Box bgcolor={'white'} gap={1} mt={3} px={5} py={2} sx={{ borderRadius: '10px' }}>
      <Box display={'flex'} gap={1}>
        <Box display={'flex'} alignItems={'start'} width={'4%'}>
          <FaTruckFast size={'42px'} fill="#40a4c7" />
        </Box>
        <Box display={'flex'} flexDirection={'column'} width={'96%'}>
          <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} gap={1}>
            <Typography sx={{ fontWeight: 'bold', fontSize: 'large' }}>Detail Pengiriman</Typography>
            <ModalTrackingOrder list={listTrackingOrder} />
          </Box>
          <Box display={'flex'} justifyContent={'start'} alignItems={'center'} gap={1}>
            <Box width={'25%'}>
              <Typography sx={{ fontSize: 'large' }}>Kurir</Typography>
            </Box>
            <Typography fontWeight={'bold'}>J&T - Regular</Typography>
          </Box>
          <Box display={'flex'} gap={1}>
            <Box width={'25%'} display={'flex'} alignItems={'center'} gap={1}>
              <Typography sx={{ fontSize: 'large' }}>No. Resi</Typography>
              <CopyIcon text={["JT6268865922"]} status="Nomor Resi berhasil disalin" />
            </Box>
            <Box display={'flex'} gap={2}>
              <Typography fontWeight={'bold'}>JT6268865922</Typography>
            </Box>
          </Box>
          <Box display={'flex'} gap={1}>
            <Box width={'25%'} display={'flex'} gap={1}>
              <Box>
                <Typography sx={{ fontSize: 'large' }}>Alamat</Typography>
              </Box>
              <CopyIcon text={['Jl. Elang IV, Sawah Lama, Kec. Ciputat, Kota Tangerang Selatan, Banten 15413', '081234567890', 'Annur Syawila Hasibuan']} status="Alamat berhasil disalin" />
            </Box>
            <Box display={'flex'} flexDirection={'column'}>
              <Typography>Jl. Elang IV, Sawah Lama, Kec. Ciputat, Kota Tangerang Selatan, Banten 15413</Typography>
              <Typography color={'gray'}>081234567890</Typography>
              <Typography color={'gray'}>Annur Syawila Hasibuan</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default DetailDelivery