import { Box, Button, Snackbar, SnackbarOrigin, Typography } from '@mui/material'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import React, { useState } from "react";

interface State extends SnackbarOrigin {
  open: boolean;
}

const Alert = () => {
  const [state, setState] = useState<State>({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });
  const { vertical, horizontal, open } = state;

  const handleClick = (newState: SnackbarOrigin) => () => {
    setState({ ...newState, open: true });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const buttons = (
    <React.Fragment>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button onClick={handleClick({ vertical: 'top', horizontal: 'center' })}>
          <ContentCopyIcon sx={{ width: '20px', height: '20px' }} />
        </Button>
      </Box>
    </React.Fragment>
  );

  return (
    <Box sx={{ width: 500 }}>
      {buttons}
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message="I love snacks"
        key={vertical + horizontal}
      >
        <Alert
          severity="success"
          action={
            <Button color="inherit" size="small">
              UNDO
            </Button>
          }
        >
          <Typography color={'white'} fontSize={'small'}>Nomor Resi berhasil disalin</Typography>
        </Alert>
      </Snackbar>
    </Box>
  )
}

export default Alert