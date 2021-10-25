import * as React from 'react';
import { List } from '@mui/material';
import { ListItemIcon, ListItemText, ListItemButton } from '@mui/material';
import { Home } from '@mui/icons-material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import RecentActorsIcon from '@mui/icons-material/RecentActors';

export default function ExploreTabs() {
    return(
        <List>
          <ListItemButton component="a" href="https://www.google.com" target="_blank" >
              <ListItemIcon color="white">
                <Home style={{color: "white"}} />
              </ListItemIcon>
              <ListItemText primary="Home" />
          </ListItemButton>

          <ListItemButton>
              <ListItemIcon>
                <TrendingUpIcon style={{color: "white"}} />
              </ListItemIcon>
              <ListItemText primary="Charts" />
          </ListItemButton>
          
          <ListItemButton>
              <ListItemIcon>
                <RecentActorsIcon style={{color: "white"}} />
              </ListItemIcon>
              <ListItemText primary="Feed" />
          </ListItemButton>
        </List>
    )
}