import * as React from 'react';
import Box from '@mui/material/Box';
import { Drawer } from '@mui/material';
import ExploreTabs from '../molecules/SideTabs';

const drawerWidth = 170;

export default function PermanentDrawerLeft() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: "black",
            color: "white",
            boxShadow: 10,
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <ExploreTabs />
      </Drawer>
    </Box>
  );
}