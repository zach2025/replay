import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

function HoverRating() {
  return (
    <Stack spacing={1} alignItems="center">
      <Rating name="half-rating" defaultValue={0.0} precision={0.5} />
    </Stack>
  );
}

export default HoverRating;