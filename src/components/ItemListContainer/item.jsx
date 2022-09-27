
import {Card, CardContent, CardMedia, Typography, CardActionArea} from '@mui/material';

const CardItem = ({data}) =>{
    return (
        <Card sx={{ maxWidth: 345 }} className="card">
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={data.img}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {data.name}
              </Typography>
              <Typography>
                Stock:{data.stock}
              </Typography>
              <Typography>
                Precio: ${data.price}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      );
}

export default CardItem;
