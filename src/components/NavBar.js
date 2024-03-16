import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 ,marginBottom:"30px", backgroundColor:"#a9e5e5"}}>
      <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h3" component="div" sx={{ flexGrow: 1, textAlign:"center" }}>
            Todo App
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
