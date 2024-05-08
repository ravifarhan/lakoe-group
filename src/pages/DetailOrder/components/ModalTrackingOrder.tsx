import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import CopyIcon from '../features/Alerts/CopyIcon';
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, timelineItemClasses, TimelineSeparator } from '@mui/lab';
import { ITrackingOrderListProps } from '../../../types';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '45%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ModalTrackingOrder: React.FC<ITrackingOrderListProps> = ({list}) => {
  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Lacak Pengiriman</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box display={'flex'} justifyContent={'space-between'}>
            <Typography id="modal-modal-title" variant="h6" fontWeight={700}>Lacak Pengiriman</Typography>
            <CancelOutlinedIcon onClick={handleClose} sx={{ cursor: 'pointer', fill: 'gray', width: '30px', height: '30px' }} />
          </Box>
          <Box p={1}>
            <Box id="modal-modal-description" sx={{ mt: 2, display: 'flex' }}>
              <Box width={'50%'}>
                <Box mb={2}>
                  <Typography>Kurir</Typography>
                  <Typography fontWeight={'bold'}>J&T - Regular</Typography>
                </Box>
                <Box mb={2}>
                  <Box display={'flex'} gap={1} alignItems={'center'}>
                    <Typography>No. Resi</Typography>
                    <CopyIcon text={["JT6268865922"]} status="Nomor Resi berhasil disalin" />
                  </Box>
                  <Typography fontWeight={'bold'}>JT6268865922</Typography>
                </Box>
                <Box mb={2}>
                  <Typography>Pengirim</Typography>
                  <Typography fontWeight={'bold'}>Bakulan Store</Typography>
                </Box>
              </Box>
              <Box width={'50%'}>
                <Typography>Alamat</Typography>
                <Typography fontWeight={'bold'}>Annur Syawila Hasibuan</Typography>
                <Typography>Jl. Elang IV, Sawah Lama, Kec. Ciputat, Kota Tangerang Selatan, Banten 15413</Typography>
              </Box>
            </Box>
          </Box>
          <Typography mb={2}>Status : <strong>Tiba di Tujuan</strong></Typography>
          <Box boxShadow={3} width={'100%'} height={'auto'} p={2}>
          <Timeline sx={{ [`& .${timelineItemClasses.root}:before`]: { flex: 0, paddingX: 0, } }}>
              {
                list.map((props, index) => {
                  const isFirst = index === 0;
                  const isLast = index === list.length - 1;
                  return (
                    <TimelineItem key={index}>
                      <TimelineSeparator>
                        {
                          isFirst ?
                            <TimelineDot variant='outlined' className='.MuiTimelineDot-outlined.css' sx={{ stroke: '#c5f8ff', strokeWidth: 5, bgcolor: '#0086b4' }} /> :
                            <TimelineDot />
                        }
                        {
                          !isLast && <TimelineConnector />
                        }
                      </TimelineSeparator>
                      <TimelineContent>
                        <Typography sx={{ fontWeight: 'bolder' , fontSize: '16px'}}>{props.status}</Typography>
                        <Typography sx={{ fontSize: 'small' }}>{props.date}</Typography>
                      </TimelineContent>
                    </TimelineItem>
                  )
                })
              }
            </Timeline>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

export default ModalTrackingOrder