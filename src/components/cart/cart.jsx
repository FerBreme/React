import { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from './cartContext'

const Cart = () => {
  const [items, setItems] = useContext(CartContext);

  const clearCart = () => setItems([]);

  const totalCart = 
  items.reduce((prev, act) =>
  prev + act.quantity * act.price, 0)

  const removeItem = (item) => {
    setItems(items.filter(prod => prod.id != item.id));
  }

  
  return (
    <div >
      <h1 className='cart'>Carrito de compras</h1>

      <div>
        {items.map(element => {
          let totalPriceItem = element.price * element.quantity
          return(
            <div className='cartItemDetail' key={element.id}>
              <img src={element.img} alt="" />
              <h3>{element.name}</h3>
              <p>${element.price}</p>
              <p>Unidades:{element.quantity}</p>
              <p>Subtotal: {totalPriceItem}</p>
              <button onClick={() => removeItem(element) }>X</button>
            </div>
          )
        })}
      </div>
      {items.length != 0 && <h3>Total: {totalCart}</h3>}
      {items.length != 0 ? <button onClick={clearCart}>Limpiar Carrito</button> : <Link to="/" className='cartLink'> Ir al Catalogo</Link>}
      {items.length != 0 && <Link to="/checkout" className='cartLink'> Finalizar Compra</Link>}
    </div>
  )
}

export default Cart