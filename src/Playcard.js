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
import PauseIcon from '@mui/icons-material/Pause';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

function Playcard(props) {
  const theme = useTheme();

  // const [alignment, setAlignment] = React.useState('play');

  // const handleAlignment = (event, newAlignment) => {
  //   setAlignment(newAlignment);
  // };

  const [selected, setSelected] = React.useState(false);

  return (
    <div>
        <Card sx={{ display: 'flex', width: 360, margin: 2 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', width: 170 }}>
            <CardContent sx={{ flex: '1 0 auto', alignItems: 'center' }}>
              <Typography component="div" variant="h5">
                {props.song}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" component="div">
                {props.artist}
              </Typography>
            </CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', pl: 2, pb: 1 }}>
              <IconButton aria-label="previous">
                {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
              </IconButton>
              
              <ToggleButton
                size="small"
                value="check"
                selected={selected}
                onChange={() => {setSelected(!selected);}}
                >
                <PlayArrowIcon sx={{ height: 38, width: 38 }} />
              </ToggleButton>


              {/* <ToggleButtonGroup
                value={alignment}
                exclusive
                onChange={handleAlignment}
                aria-label="play/pause"
              >
                <ToggleButton value="play" aria-label="play button">
                  <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                </ToggleButton>
                <ToggleButton value="pause" aria-label="pause button">
                  <PauseIcon sx={{ height: 38, width: 38 }} />
                </ToggleButton>
              </ToggleButtonGroup> */}

              <IconButton aria-label="next">
                {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
              </IconButton>
            </Box>
          </Box>
          <CardMedia
            component="img"
            sx={{ width: 190 }}
            image={'img/'+ props.cover}
            alt= {props.song + "cover"}
          />
        </Card>
    </div>
  );
}

export default Playcard;