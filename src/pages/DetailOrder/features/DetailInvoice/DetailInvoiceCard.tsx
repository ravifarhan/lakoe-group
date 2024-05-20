import { Box, Typography } from "@mui/material"
import EventNoteIcon from '@mui/icons-material/EventNote';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CopyIcon from "../Alerts/CopyIcon";

const DetailInvoiceCard = () => {

  return (
    <Box bgcolor={'white'} gap={1} mt={3} px={5} py={2} sx={{ borderRadius: '10px' }}>
      <Box display={'flex'} flexDirection={'column'} gap={2}>
        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} gap={1}>
          <Box display={'flex'} alignItems={'center'} gap={1}>
            <EventNoteIcon sx={{ width: '42px', height: '42px', fill: '#40a4c7' }} />
            <Typography sx={{ fontWeight: 'bold', fontSize: 'large' }}>Tanggal</Typography>
          </Box>
          <Typography fontSize={'medium'} textAlign={'end'}>09 Agustus 2023 - 19:43 WIB</Typography>
        </Box>
        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} gap={1}>
          <Box display={'flex'} alignItems={'center'} gap={1}>
            <CreditCardIcon sx={{ width: '42px', height: '42px', fill: '#40a4c7' }} />
            <Typography sx={{ fontWeight: 'bold', fontSize: 'large' }}>Invoice</Typography>
          </Box>
          <Box display={'flex'}>
            <CopyIcon text={["INV/20230809/MPL/00000239"]} status="Nomor Invoice berhasil disalin"/>
            <Typography textAlign={'end'}>INV/20230809/MPL/00000239</Typography>
          </Box>
        </Box>
        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} gap={1}>
          <Box display={'flex'} alignItems={'center'} gap={1}>
            <AccountCircleOutlinedIcon sx={{ width: '42px', height: '42px', fill: '#40a4c7' }} />
            <Typography sx={{ fontWeight: 'bold', fontSize: 'large' }}>Pembeli</Typography>
          </Box>
          <Box display={'flex'} gap={2}>
            <WhatsAppIcon sx={{ fill: '#008f5d' }} />
            <Typography textAlign={'end'}>Annur Syawila Hasibuan</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default DetailInvoiceCard