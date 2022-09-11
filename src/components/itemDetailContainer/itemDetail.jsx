import {Card, CardContent, CardMedia, Typography, CardActionArea, Button} from '@mui/material';
import Counter from '../itemCount/itemCount';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const CardItemDetail = ({data}) =>{
  const [cart, setCart] = useState([]);
   const addToCart = () => {
    setCart(data);
  }

    return (
        <Card sx={{ maxWidth: 700 }} className="card">
          <CardActionArea>
            <CardMedia
              component="img"
              height="300"
              image={data.img}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {data.nombre}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                 Descripcion: {data.Descripcion}
              </Typography>
              <Typography>
                Stock:{data.stock}
              </Typography>
              <Typography>
                Precio: ${data.precio}
              </Typography>
            </CardContent>
          </CardActionArea>

          {cart.length == 0 ? <Counter data={addToCart}/> : <Link to="/cart" className='cartLink'> Ir al carrito</Link> }
        </Card>
      );
}

export default CardItemDetail;