import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Save
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Load
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}