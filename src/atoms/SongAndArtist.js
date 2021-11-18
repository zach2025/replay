import { CardContent } from "@mui/material"
import { Typography } from "@mui/material"
import { Link } from 'react-router-dom'
import { styled } from '@mui/material/styles';

const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

function SongAndArtist(props) {
    return(
        <CardContent sx={{ flex: '1 0 auto', alignItems: 'center', pt: 4, }}>
            <StyledLink to='/feed' activeStyle={{textDecoration: "none"}} replace><Typography component="div" variant="h5" color="text.primary" noWrap="true" overflow="hidden">
                {props.song}
            </Typography></StyledLink>
            <Typography variant="subtitle4" color="text.secondary" component="div">
                {props.artist}
            </Typography>
        </CardContent>
    )
}

export default SongAndArtist