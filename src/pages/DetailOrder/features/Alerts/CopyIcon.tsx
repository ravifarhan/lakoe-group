import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import InfoIcon from '@mui/icons-material/Info';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';
import { Alert, Typography } from '@mui/material';

interface CopyTextProps {
  text: string[]
  status: string
}

interface State extends SnackbarOrigin {
  open: boolean;
}

export default function CopyIcon({ text, status }: CopyTextProps) {
  const [state, setState] = React.useState<State>({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });
  const { vertical, horizontal, open } = state;

  const handleClick = (newState: SnackbarOrigin) => () => {
    const combinedText = text.join('\n');
    navigator.clipboard.writeText(combinedText);
    setState({ ...newState, open: true });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  return (
    <>
      <Box>
        <Button onClick={handleClick({ vertical: 'top', horizontal: 'center' })} sx={{ p: '0', minWidth: '0px', width: '30px' }}>
          <ContentCopyIcon sx={{ width: '20px', height: '20px' }} />
        </Button>
        <Snackbar anchorOrigin={{ vertical, horizontal }} open={open} autoHideDuration={2000} onClose={handleClose} key={vertical + horizontal}>
          <Alert icon={<InfoIcon fontSize="inherit" sx={{ fill: 'white' }} />} severity="info" style={{ backgroundColor: '#1D1D1D', width: 'auto' }}>
            <Box sx={{ display: 'flex', flexDirection: 'row'}}>
              <Box>
                <Typography color={'white'} fontSize={'small'}>{status}</Typography>
              </Box>
              <Box sx={{alignItems: 'flex-end', justifyContent: 'flex-end', ml: '80px'}}>
                <Button sx={{ color: 'white', fontSize: 'small', padding: 0, minWidth: 0 }} onClick={handleClose}>OK</Button>
              </Box>
            </Box>
          </Alert>
        </Snackbar>
      </Box>
    </>
  );
}