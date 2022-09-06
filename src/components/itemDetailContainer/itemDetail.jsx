import {Card, CardContent, CardMedia, Typography, CardActionArea} from '@mui/material';

const CardItemDetail = ({data}) =>{
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
                {data.nombre}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {data.Descripcion}
              </Typography>
              <Typography>
                Stock:{data.stock}
              </Typography>
              <Typography>
                Precio: ${data.precio}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      );
}

export default CardItemDetail;