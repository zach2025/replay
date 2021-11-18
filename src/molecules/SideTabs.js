import * as React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { List, ListItemIcon, ListItemText, ListItemButton, Divider } from '@mui/material';
import { Home } from '@mui/icons-material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import StarIcon from '@mui/icons-material/Star';
import { Box } from '@mui/system';

const TabSelect = styled(ListItemButton)({
  color: "white",
  '&.Mui-selected': {
    backgroundColor: "rgba(255, 67, 67, 0.7)"
  },
  '&:hover, &.Mui-selected:hover': {
    backgroundColor: 'rgba(255, 67, 67, 0.2)'
  },
})

export default function ExploreTabs() {
  const history = useHistory();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleListItemClick = (index) => {
    setSelectedIndex(index);
  };
    return(
      <Box>
        <List>
            <TabSelect selected={selectedIndex === 0} onClick={() => {history.push("/"); handleListItemClick(0)}} >
                <ListItemIcon style={{color: "white"}}>
                  <Home />
                </ListItemIcon>
                <ListItemText primary="Home" />
            </TabSelect>

            <TabSelect style={{color: "white"}} selected={selectedIndex === 1} onClick={() => {history.push("/charts"); handleListItemClick(1)}}>
                <ListItemIcon style={{color: "white"}}>
                  <TrendingUpIcon />
                </ListItemIcon>
                <ListItemText primary="Charts"/>
            </TabSelect>

            <TabSelect style={{color: "white"}} selected={selectedIndex === 2} onClick={() => {history.push("/feed"); handleListItemClick(2)}}>
                <ListItemIcon style={{color: "white"}}>
                  <RecentActorsIcon />
                </ListItemIcon>
                <ListItemText primary="Feed" />
            </TabSelect>
        </List>
        
        <Divider />
        
        <List>
          <TabSelect style={{color: "white"}} selected={selectedIndex === 3} onClick={() => {history.push("/reviews"); handleListItemClick(3)}}>
              <ListItemIcon style={{color: "white"}}>
                <StarIcon />
              </ListItemIcon>
              <ListItemText primary="Reviews" />
          </TabSelect>
        </List>
      </Box>
    )
}