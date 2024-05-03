import { Box, Typography } from "@mui/material"
import { IoWallet } from "react-icons/io5";

const DetailPayment = () => {
  return (
    <Box bgcolor={'white'} gap={1} mt={3} px={5} py={2} sx={{ borderRadius: '10px' }}>
      <Box display={'flex'} justifyContent={'space-between'} gap={1}>
        <Box display={'flex'} alignItems={'start'} width={'4%'}>
          <IoWallet size={'42px'} fill="#40a4c7" />
        </Box>
        <Box display={'flex'} flexDirection={'column'} width={'96%'} gap={1}>
          <Box display={'flex'} alignItems={'center'} gap={1}>
            <Typography sx={{ fontWeight: 'bold', fontSize: 'large' }}>Rincian Pembayaran</Typography>
          </Box>
          <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} gap={1}>
            <Box width={'25%'}>
              <Typography sx={{ fontSize: 'large' }}>Total Harga (1 barang)</Typography>
            </Box>
            <Typography fontWeight={'bold'}>Rp180.000</Typography>
          </Box>
          <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} gap={1}>
            <Box width={'25%'}>
              <Typography sx={{ fontSize: 'large' }}>Total Ongkos Kirim (10kg)</Typography>
            </Box>
            <Box display={'flex'} gap={2}>
              <Typography fontWeight={'bold'}>Rp10.000</Typography>
            </Box>
          </Box>
          <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} gap={1}>
            <Box width={'25%'}>
              <Typography sx={{ fontSize: 'large' }}>Diskon</Typography>
            </Box>
            <Box display={'flex'} gap={2}>
              <Typography fontWeight={'bold'}>Rp0</Typography>
            </Box>
          </Box>
          <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} gap={1}>
            <Box width={'25%'}>
              <Typography sx={{ fontSize: 'large' }}>Biaya Layanan</Typography>
            </Box>
            <Box display={'flex'} flexDirection={'column'}>
              <Typography fontWeight={'bold'}>Rp0</Typography>
            </Box>
          </Box>
          <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} gap={1} borderTop={'1px solid #E6E6E6'} pt={3}>
            <Box width={'25%'}>
              <Typography sx={{ fontSize: 'large', fontWeight: 'bold' }}>Total Penjualan</Typography>
            </Box>
            <Box display={'flex'} flexDirection={'column'}>
              <Typography fontWeight={'bold'}>Rp190.000</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default DetailPayment