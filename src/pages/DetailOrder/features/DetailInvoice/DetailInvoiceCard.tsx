import { Box, Typography } from "@mui/material"
import EventNoteIcon from '@mui/icons-material/EventNote';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

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
          <Box display={'flex'} gap={1} alignItems={'center'}>
            {/* Masih Error */}
            {/* <Button sx={{ bgcolor: 'none', padding: 0, height: 28, minWidth: 0 }} onClick={handleClick({ vertical: 'top', horizontal: 'center' })}>
              <Stack sx={{ width: '100%' }} spacing={2}>
                <ContentCopyIcon sx={{ width: '20px', height: '20px' }} />
                <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
                  <Alert icon={<InfoIcon fontSize="inherit" sx={{ fill: 'white' }} />} severity="info" style={{ backgroundColor: '#1D1D1D' }}>
                    <Typography color={'white'} fontSize={'small'}>Nomor Resi berhasil disalin</Typography>
                  </Alert>
                </Snackbar>
              </Stack>
            </Button> */}
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