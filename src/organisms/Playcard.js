import * as React from 'react';
import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import IconButton from '@mui/material/IconButton';
import PauseRounded from '@mui/icons-material/PauseRounded';
import PlayArrowRounded from '@mui/icons-material/PlayArrowRounded';
import FastForwardRounded from '@mui/icons-material/FastForwardRounded';
import FastRewindRounded from '@mui/icons-material/FastRewindRounded';
import HoverRating from '../atoms/HoverRating';
import CardImage from '../atoms/CardImage';
import SongAndArtist from '../atoms/SongAndArtist';
import TimeSlider from '../atoms/TimeSlider';
import VolumeSlider from '../atoms/VolumeSlider';
import { CardMedia } from '@mui/material';


function Playcard({albumset}) {
  const fullalbum = albumset.albums
  console.log(albumset.albums[0].song);
  const theme = useTheme();
  const [count, setCount] = useState(0);
  const [paused, setPaused] = React.useState(false);
  const mainIconColor = theme.palette.mode === 'dark' ? '#fff' : '#000';
  function setCounter(number) {
    if (number < 0) {
      number = 0;
    }
    if (number >= fullalbum.length) {
      number--;
    }
    setCount(number);
  }
  return (
    <div>
        <Card sx={{ display: 'flex', width: 550, height: 'auto', margin: 2, }}>
          <CardImage cover={fullalbum[count].cover} song={fullalbum[count].song} />

          <Box sx={{ display: 'flex', flexDirection: 'column', minWidth: 230, pr: 1.5, pl: 3.5 }}>
            <SongAndArtist song={fullalbum[count].song} artist={fullalbum[count].artist} />

            <Box sx={{pb: 1.5}}>
              <HoverRating sizing="large" />
            </Box>

            <TimeSlider />

            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: -1,}}>
              <IconButton aria-label="previous song" onClick={() => setCounter(count-1)}>
                  <FastRewindRounded fontSize="large" htmlColor={mainIconColor} />
              </IconButton>

              <IconButton aria-label={paused ? 'play' : 'pause'} onClick={() => setPaused(!paused)}>
                  {paused ? (<PauseRounded sx={{ fontSize: '3rem' }} htmlColor={mainIconColor} />) : (<PlayArrowRounded sx={{ fontSize: '3rem' }} htmlColor={mainIconColor}/>)}
              </IconButton>

              <IconButton aria-label="next song" onClick={() => setCounter(count+1)}>
                  <FastForwardRounded fontSize="large" htmlColor={mainIconColor} />
              </IconButton>
            </Box>

            <VolumeSlider />
          </Box>
        </Card>
    </div>
  );
}

export default Playcard;