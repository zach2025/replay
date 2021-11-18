import * as React from 'react';
import Box from '@mui/material/Box';
import { Toolbar } from '@mui/material';
import Playcard from '../organisms/Playcard';

export default function ChartsPage() {
    return (
        <Box sx={{ display: 'flex' }}>
            <Box component="main" sx={{ flexGrow: 1, pl: 21.5, pt: 3 }}>
                <Toolbar />
            </Box>
        </Box>
    );
}