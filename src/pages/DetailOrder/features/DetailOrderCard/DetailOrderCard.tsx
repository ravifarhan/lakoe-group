import { Box, Typography } from "@mui/material"
import { PiPackage } from "react-icons/pi";

const DetailOrderCard = () => {
  return (
    <Box bgcolor={'white'} gap={1} mt={3} px={5} py={2} sx={{ borderRadius: '10px' }}>
      <Box display={'flex'} gap={1}>
        <Box display={'flex'} alignItems={'start'} width={'4%'}>
          <PiPackage size={'42px'} fill="#40a4c7" />
        </Box>
        <Box display={'flex'} flexDirection={'column'} width={'96%'}>
          <Box>
            <Typography sx={{ fontWeight: 'bold', fontSize: 'large' }}>Detail Produk</Typography>
          </Box>
          <Box display={"flex"} p={1} border={"1px #e6e4e5 solid"} borderRadius={"10px"} gap={2}>
            <Box>
              <img
                style={{ borderRadius: '10px' }}
                width={"80px"}
                height={"80px"}
                src="https://i.pinimg.com/564x/53/51/44/535144c13648b5be65ba57b81d396f36.jpg"
                alt="tshirt"
              />
            </Box>
            <Box display={'flex'} flexDirection={'column'} gap={4} width={'100%'}>
              <Box display={'flex'} justifyContent={'space-between'}>
                <Typography sx={{ fontSize: "16px", fontWeight: "bold", color: "black" }}>
                  KAOS BASIC COTTON KENARI - BRONZE GREEN [ COTTON COMBED 30S ]
                </Typography>
                <Typography sx={{ color: "#909090" }}>Total Belanja</Typography>
              </Box>
              <Box display={'flex'} justifyContent={'space-between'}>
                <Typography sx={{ color: 'black', fontWeight: '600' }}>1 x Rp180.000</Typography>
                <Typography sx={{ color: 'black', fontWeight: 'bolder' }}>Rp180.000</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box mb={'20px'}>
      </Box>
    </Box>
  )
}

export default DetailOrderCard