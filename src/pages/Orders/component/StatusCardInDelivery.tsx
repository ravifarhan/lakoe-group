import { Box, Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const StatusCardInDelivery = () => {
  return (
    <Link to={'/detail-order'} style={{ textDecoration: 'none', color: 'white' }}>
      <Box mb={'20px'}>
        <Box display={'flex'} justifyContent={'space-between'} p={2} border={"1px #e6e4e5 solid"} borderRadius={"10px"}>
          <Box>
            <Typography p={1} bgcolor={'#f68511'} sx={{ fontWeight: 'bolder', width: 'fit-content', borderRadius: '10px' }} mb={1}>Dalam Pengiriman</Typography>
            <Typography color={'#909090'}>INV/20230809/MPL/00000239</Typography>
          </Box>
          <Box>
            <Button sx={{ border: 'gray solid 1px', borderRadius: '30px', fontWeight: 'bolder', color: 'black' }}>Lihat Rincian Pengiriman</Button>
          </Box>
        </Box>
        <Box
          display={"flex"}
          p={2}
          border={"1px #e6e4e5 solid"}
          borderRadius={"10px"}
          justifyContent={'center'}
        >
          <Box padding={"5px"}>
            <img
              width={"80px"}
              height={"80px"}
              src="https://i.pinimg.com/564x/53/51/44/535144c13648b5be65ba57b81d396f36.jpg"
              alt="tshirt"
            />
          </Box>
          <Box width={"80%"} marginLeft={"10px"} marginTop={"6px"} display={'flex'} flexDirection={'column'} justifyContent={'center'} gap={3}>
            <Typography sx={{ fontSize: "16px", fontWeight: "bold", color: "black" }}>
              KAOS BASIC COTTON KENARI - BRONZE GREEN [ COTTON COMBED 30S ]
            </Typography>
            <Typography color={'gray'}>1 Barang</Typography>
          </Box>
          <Box marginLeft={"10px"} marginTop={"6px"} display={'flex'} flexDirection={'column'} justifyContent={'center'} gap={3}>
            <Typography sx={{ color: "#909090" }}>Total Belanja</Typography>
            <Typography sx={{ color: 'black', fontWeight: 'bolder' }}>Rp190.000</Typography>
          </Box>
        </Box>
      </Box>
    </Link>
  )
}

export default StatusCardInDelivery