import { useContext } from 'react'
import { CartContext } from './cartContext'

const Cart = () => {
  const [items, setItems] = useContext(CartContext);
  console.log(items);
  return (
    <div className='cart'><h1>Carrito de compras</h1></div>
  )
}

export default Cart