import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Slider from '@mui/material/Slider';
import Stack from '@mui/material/Stack';
// import VolumeUpRounded from '@mui/icons-material/VolumeUpRounded';
import VolumeDownRounded from '@mui/icons-material/VolumeDownRounded';

function VolumeSlider() {
    const theme = useTheme();
    const lightIconColor = theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)';

    return(
        <Stack spacing={2} direction="row" sx={{ mb: 1, px: 1 }} alignItems="center">
            <VolumeDownRounded htmlColor={lightIconColor} />
            <Slider
                aria-label="Volume"
                defaultValue={30}
                sx={{
                    color: theme.palette.mode === 'dark' ? '#fff' : 'rgba(0,0,0,0.87)',
                    '& .MuiSlider-track': {
                        border: 'none',
                    },
                    '& .MuiSlider-thumb': {
                        width: 15,
                        height: 15,
                        '&:before': {
                            boxShadow: '0 2px 12px rgba(0,0,0,0.4)',
                        },
                        '&:hover, &.Mui-focusVisible, &.Mui-active': {
                            boxShadow: 'none',
                        },
                    },
                }}
            />
            {/* <VolumeUpRounded htmlColor={lightIconColor} /> */}
        </Stack>
    )
}

export default VolumeSlider;