import * as React from 'react';
import { styled } from '@mui/material/styles';
import { List, ListItem, ListItemButton, ListItemText, Grid, Toolbar, Divider, Paper } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ExplicitIcon from '@mui/icons-material/Explicit';
import HoverRating from '../atoms/HoverRating';



const ArtistText = styled(ListItemText)({
    '& .MuiListItemText-secondary': {
        color: "#d0d0d0",
    },
});

const HoverSelect = styled(ListItemButton)({
    '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
    }
})

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function Tracklist({albumset}) {
    const fullalbum = albumset.albums
    const arr = new Array(fullalbum.length).fill(0)
    return(
        <List>
            <ListItem>
                <Grid container  direction="row" alignItems="center" spacing={2}>
                    <Grid item xs={0.75} sx={{textAlign: 'center', color: 'lightgrey'}}>
                        #
                    </Grid>
                    <Grid item xs={10.15} sx={{color: 'lightgrey'}}>
                        TRACKLIST
                    </Grid>
                    <Grid item xs={1} sx={{color: 'lightgrey'}}>
                        <AccessTimeIcon/>
                    </Grid>
                </Grid>
            </ListItem>
            <Divider sx={{bgcolor: 'lightgrey'}}/>
            {arr.map((text, index) => (
                <ListItem key={text}>
                    <HoverSelect>
                            <Grid container  direction="row" alignItems="center" spacing={2}>
                                <Grid item xs={0.5} sx={{textAlign: "center"}}>
                                    <ListItemText primary={index+1}/>
                                </Grid>
                                <Grid item xs={8.5}>
                                    <ArtistText primary={fullalbum[index].song} secondary={fullalbum[index].artist}/>
                                </Grid>
                                <Grid item xs={2}>
                                    <HoverRating />
                                </Grid>
                                <Grid item xs={1}>
                                    <ListItemText primary={fullalbum[index].time}/>
                                </Grid>
                            </Grid>
                    </HoverSelect>
                </ListItem>
            ))}
        </List>
    )
}

export default Tracklist;