import { useState } from "react"
import {Card, CardContent, CardMedia, Typography, CardActionArea} from '@mui/material';

const CardItem = ({data}) =>{
    return (
        <Card sx={{ maxWidth: 345 }}>
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
                {data.descripcion}
              </Typography>
              <Typography>
                {data.stock}
              </Typography>
              <Typography>
                {data.precio}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      );
}

export default CardItem;
// const Counter = () =>{
//     const [contador, setContador] = useState(0);
//      const sumarContador = () =>{
//         if (contador < 15 ) {
//             setContador(contador + 1 );
//         } else{
//             alert('Excediste el limite actual de stock.');
//         }
//     }
//      const restarContador = () => {
//         if (contador > 0) {
//             setContador(contador - 1);
//         } else{
//             alert('El carrito ya se encuentra vacio');
//         }
//     }
//     return(
//         <div className="counterContainer">
//             <h3 className="counterTittle">Counter</h3>
//             <div className="btnContainer">
//                 <button onClick={sumarContador}>+</button>
//                 <p className="counter">{contador}</p>
//                 <button onClick={restarContador}>-</button>
//             </div>
            
//         </div>
//     )
// }
// export default Counter;