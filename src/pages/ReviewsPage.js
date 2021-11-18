import * as React from 'react';
import Box from '@mui/material/Box';
import CardImage from '../atoms/CardImage';
import HoverRating from '../atoms/HoverRating';
import { Stack } from '@mui/material';
import Tracklist from '../organisms/Tracklist';


export default function ReviewsPage({albumset}) {
    const fullalbum = albumset.albums
    return (
        <Box sx={{ display: 'flex', pt: 8.5 }}>
            <Stack>
                <Box component="main" sx={{ flexGrow: 1, pl: 21.5, pt: 3, alignItems:"center" }} >
                    <CardImage song={fullalbum[0].song} cover={fullalbum[0].cover} />
                    <h2>{fullalbum[0].song}</h2>
                    <subtitle>{fullalbum[0].artist}</subtitle>
                    <Box sx={{pt: 1}}>
                        <HoverRating sizing="large"/>
                    </Box>
                </Box>
            </Stack>
            <Box sx={{ flexGrow: 1, pl: 3, pt: 2 }} >
                <Tracklist albumset={albumset} />
            </Box>
        </Box>
    );
}