import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import HoverRating from '../atoms/HoverRating';

function Playcard(props) {
  const theme = useTheme();

  return (
    <div>
        <Card sx={{ display: 'flex', width: 400, margin: 2 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', width: 180 }}>
            <CardContent sx={{ flex: '1 0 auto', alignItems: 'center', pt: 3 }}>
              <Typography component="div" variant="h5">
                {props.song}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" component="div">
                {props.artist}
              </Typography>
            </CardContent>

            <Box sx={{ display: 'flex', pl: 3, pb: 1 }}>
              <IconButton aria-label="previous">
                {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
              </IconButton>
              
              <IconButton aria-label="play/pause">
                <PlayArrowIcon sx={{ height: 38, width: 38 }} />
              </IconButton>

              <IconButton aria-label="next">
                {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
              </IconButton>
            </Box>

            <Box>
              <HoverRating/>
            </Box>
          </Box>

          <CardMedia
            component="img"
            sx={{ width: 220 }}
            image={'img/'+ props.cover}
            alt= {props.song + "cover"}
          />
        </Card>
    </div>
  );
}

export default Playcard;