import { Box, Typography } from '@mui/material'
import StatusCardOrderCanceled from './StatusCardOrderCanceled'
import NotFound from '../../../assets/not-found.png'

const ListOrderCanceled = () => {
  const listStatus = false
  return (
    <>
    {
      listStatus ?
      <StatusCardOrderCanceled /> :
      <Box display={'flex'} gap={3} justifyContent={'center'} alignItems={'center'} p={10}>
        <Box>
          <img src={NotFound} alt="notfound" width={'75'} height={'80'}/>
        </Box>
        <Box>
          <Typography color={'black'} fontSize={'large'} fontWeight={'bold'}>Oops, pesanan yang kamu cari tidak ditemukan</Typography>
          <Typography color={'gray'}>Coba bisa cari dengan kata kunci lain</Typography>
        </Box>
      </Box>
    }
    </>
  )
}

export default ListOrderCanceled