import * as React from 'react';
import Box from '@mui/material/Box';
import { Toolbar } from '@mui/material';
import {Drawer, List, Divider } from '@mui/material';
import { ListItemIcon, ListItemText, ListItemButton } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import Playcard from '../molecules/Playcard';
import ExploreTabs from './ExploreTabs';

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
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <ExploreTabs />

        <Divider />

        <List>
        <ListItemButton>
              <ListItemIcon>
                <StarIcon style={{color: "white"}} />
              </ListItemIcon>
              <ListItemText primary="Reviews" />
          </ListItemButton>
        </List>
      </Drawer>

      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3 }}
      >
        <Toolbar />
        <Playcard song="Live From Space" artist="Mac Miller" cover="live-from-space.jpeg" />
        <Playcard song="I Wonder" artist="Kanye West" cover="graduation.jpeg" />
        <Playcard song="Bohemian Rhapsody" artist="Queen" cover="queen-ii.jpeg" />
        <Playcard song="Live From Space" artist="Mac Miller" cover="live-from-space.jpeg" />
      </Box>
    </Box>
  );
}