import { Accordion, AccordionDetails, AccordionSummary, Box, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import CircleIcon from '@mui/icons-material/Circle';
import ArticleIcon from '@mui/icons-material/Article';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';

const TrackingOrderCard = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  const isActive = true

  // const listItems = [
  //   { primary: "Produk Telah Diterima", secondary: "Sen, 12 Agu 2023 - 10:00 WIB" },
  //   { primary: "Produk Telah Dikirim", secondary: "Sab, 10 Agu 2023 - 20:00 WIB" },
  //   { primary: "Pesanan Diproses", secondary: "Sab, 10 Agu 2023 - 15:00 WIB" },
  //   { primary: "Pembayaran Terverifikasi", secondary: "Sab, 10 Agu 2023 - 14:12 WIB" },
  //   { primary: "Pesanan Dibuat", secondary: "Sab, 10 Agu 2023 - 14:00 WIB" }
  // ];

  return (
    <Box bgcolor={'white'} display={'flex'} gap={1} px={5} py={2} sx={{ borderRadius: '10px' }}>
      <Box>
        <ArticleIcon sx={{ width: '42px', height: '42px', color: '#40a4c7' }} />
      </Box>
      <Box>
        <Box mb={3}>
          <Typography p={1} bgcolor={'#e8c600'} sx={{ fontWeight: 'bolder', width: 'fit-content', borderRadius: '10px', color: 'black' }} mb={1}>Belum Dibayar</Typography>
          <Typography color={'black'}>Pesanan akan dibatalkan bila pembayaran tidak dilakukan sampai <strong>10 Agustus 2023 - 00:00 WIB</strong>. Silakan tunggu sampai pembayaran terkonfirmasi sebelum mengirimkan barang.</Typography>
        </Box>
        <Accordion expanded={isExpanded} onChange={toggleAccordion}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
            <Typography color='#0086b4' fontWeight={'bolder'}>
              {isExpanded ? 'Sembunyikan' : 'Lihat Riwayat Pesanan'}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box sx={{ maxWidth: 400 }}>
              <List>
                <ListItem>
                  <ListItemIcon>
                    {isActive ?
                      <CircleIcon sx={{ color: '#0086b4', stroke: '#c5f8ff', strokeWidth: 5 }} /> :
                      <CircleIcon sx={{ color: '#D5D5D5', stroke: '#F8F8F8', strokeWidth: 5 }} />
                    }
                  </ListItemIcon>
                  <ListItemText
                    primary="Produk Telah Diterima"
                    secondary="Sen, 12 Agu 2023 - 10:00 WIB"
                    primaryTypographyProps={{ fontWeight: 'bold' }}
                  />
                </ListItem>
                {/* <Box sx={{ ml: '26px', borderLeft: '1px solid #D5D5D5', height: '50px', position: '' }} /> */}
                <ListItem>
                  <ListItemIcon>
                    <CircleIcon sx={{ color: '#D5D5D5', stroke: '#F8F8F8', strokeWidth: 5 }} />
                    {/* {isActive ?
                        <CircleIcon sx={{ color: '#0086b4', stroke: '#c5f8ff', strokeWidth: 5 }} /> :
                      } */}
                  </ListItemIcon>
                  <ListItemText
                    primary="Produk Telah Dikirim"
                    secondary="Sab, 10 Agu 2023 - 20:00 WIB"
                    primaryTypographyProps={{ fontWeight: 'bold' }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CircleIcon sx={{ color: '#D5D5D5', stroke: '#F8F8F8', strokeWidth: 5 }} />
                    {/* {isActive ?
                        <CircleIcon sx={{ color: '#0086b4', stroke: '#c5f8ff', strokeWidth: 5 }} /> :
                      } */}
                  </ListItemIcon>
                  <ListItemText
                    primary="Pesanan Diproses"
                    secondary="Sab, 10 Agu 2023 - 15:00 WIB"
                    primaryTypographyProps={{ fontWeight: 'bold' }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CircleIcon sx={{ color: '#D5D5D5', stroke: '#F8F8F8', strokeWidth: 5 }} />
                    {/* {isActive ?
                        <CircleIcon sx={{ color: '#0086b4', stroke: '#c5f8ff', strokeWidth: 5 }} /> :
                      } */}
                  </ListItemIcon>
                  <ListItemText
                    primary="Pembayaran Terverifikasi"
                    secondary="Sab, 10 Agu 2023 - 14:12 WIB"
                    primaryTypographyProps={{ fontWeight: 'bold' }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CircleIcon sx={{ color: '#D5D5D5', stroke: '#F8F8F8', strokeWidth: 5 }} />
                    {/* {isActive ?
                        <CircleIcon sx={{ color: '#0086b4', stroke: '#c5f8ff', strokeWidth: 5 }} /> :
                      } */}
                  </ListItemIcon>
                  <ListItemText
                    primary="Pesanan Dibuat"
                    secondary="Sab, 10 Agu 2023 - 14:00 WIB"
                    primaryTypographyProps={{ fontWeight: 'bold' }}
                  />
                </ListItem>
              </List>
            </Box>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  )
}

export default TrackingOrderCard