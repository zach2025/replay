import { CardMedia } from "@mui/material"

function CardImage(props) {
    return(
    <CardMedia
        component="img"
        sx={{ width: 280, height: 280 }}
        image={'img/'+ props.cover}
        alt= {props.song + " cover art"}
    />
    )
}

export default CardImage