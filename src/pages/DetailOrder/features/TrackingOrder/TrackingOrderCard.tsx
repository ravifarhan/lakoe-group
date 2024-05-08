import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material'
import ArticleIcon from '@mui/icons-material/Article';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, timelineItemClasses, TimelineSeparator } from '@mui/lab';
import { ITrackingOrderListProps } from '../../../../types';

const TrackingOrderCard: React.FC<ITrackingOrderListProps> = ({ list }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Box bgcolor={'white'} display={'flex'} gap={1} px={5} py={2} sx={{ borderRadius: '10px' }}>
      <Box>
        <ArticleIcon sx={{ width: '42px', height: '42px', fill: '#40a4c7' }} />
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
                        <Typography>{props.status}</Typography>
                        <Typography>{props.date}</Typography>
                      </TimelineContent>
                    </TimelineItem>
                  )
                })
              }
            </Timeline>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  )
}

export default TrackingOrderCard