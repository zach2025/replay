import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';


function HoverRating(props) {
  return (
    <Stack spacing={1} alignItems="center">
      <Rating size={props.sizing} name="half-rating" defaultValue={0.0} precision={0.5} sx={{'& .MuiRating-iconEmpty': {color: '#ffc6c2'}, '& .MuiRating-iconFilled': {color: '#ffc6c2'}}}/>
    </Stack>
  );
}

export default HoverRating;