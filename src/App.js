import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { Box } from '@mui/system';
import { Container } from '@mui/material';
import HomePage from './pages/HomePage';
import ChartsPage from './pages/ChartsPage';
import FeedPage from './pages/FeedPage';
import ReviewsPage from './pages/ReviewsPage';
import TopBar from './organisms/TopBar';
import NavBar from './organisms/SideBar';
import Playcard from './organisms/Playcard';


const albumData = {
  "albums": [
    {
      "song": "Live From Space",
      "artist": "Mac Miller",
      "cover": "live-from-space.jpeg",
      "time": "3:50"
    },
    {
      "song": "I Wonder" ,
      "artist":"Kanye West",
      "cover": "graduation.jpeg",
      "time": "4:20"
    },
    {
      "song": "Bohemian Rhapsody",
      "artist": "Queen",
      "cover": "queen-ii.jpeg",
      "time": "2:36"
    },
  ]
}


function App() {
  return (
    <Router>
      <Box>
        <TopBar />
        <NavBar />
        <Switch>
          <Container maxWidth="false"> 
            <Route exact path="/" render={() => <HomePage/>} />
            <Route path="/charts" render={() => <ChartsPage/>} />
            <Route path="/feed" render={() => <FeedPage/>} />
            <Route path="/reviews" render={() => <ReviewsPage albumset={albumData}/>} />
          </Container>
        </Switch>
        <Box sx={{ flexGrow: 1, pl: 21.5 }}>
          <Playcard albumset={albumData}/>
        </Box>
      </Box>
    </Router>
  );
}

export default App;