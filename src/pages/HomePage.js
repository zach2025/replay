import * as React from 'react';
import Box from '@mui/material/Box';
import { Toolbar } from '@mui/material';
import Playcard from '../molecules/Playcard';

export default function HomePage() {
    return (
        <Box
            component="main"
            sx={{ flexGrow: 1, p: 3 }}
        >
            <Toolbar />
            <Playcard song="Live From Space" artist="Mac Miller" cover="live-from-space.jpeg" />
            <Playcard song="I Wonder" artist="Kanye West" cover="graduation.jpeg" />
        </Box>
    );
}