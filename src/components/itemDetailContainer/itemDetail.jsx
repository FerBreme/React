import {Card, CardContent, CardMedia, Typography, CardActionArea, Button} from '@mui/material';
import Counter from '../itemCount/itemCount';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import { CartContext } from '../cart/cartContext';
const CardItemDetail = ({data}) =>{
  const [cart, setCart] = useContext(CartContext);
   const addToCart = () => {
    setCart(data);
    toast('Agregado Exitosamente!');
  }
  console.log(cart)
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
          <Counter  stock= {data.stock} event={addToCart}/>
          {cart.length != 0 ? <Link to="/cart" className='cartLink'> Ir al carrito</Link> : null}

          <ToastContainer 
          position='top-center'/>
        </Card>
      );
}

export default CardItemDetail;