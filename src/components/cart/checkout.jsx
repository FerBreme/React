import React, { useState } from 'react'
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';
import TextField from '@mui/material/TextField';
import { Alert } from '@mui/material';
import { useContext } from 'react';
import { CartContext } from './cartContext'
import { isDisabled } from '@testing-library/user-event/dist/utils';
const initialState = {
  name: '',
  lastName: '',
  telephone: '',
  email: ''
}

const Checkout = () => {
  const [values, setValues] = useState(initialState);
  const [orderID, setOrderID] = useState("");
  const [items, setItems] = useContext(CartContext);
  console.log(values);

  
  const handleOnChange = (e) => {
		const { value, name } = e.target;
		setValues({ ...values, [name]: value });
	};

  const onSubmit = async (e) => {
		e.preventDefault();
		const docRef = await addDoc(collection(db, 'orderers'), {
			values,
		});
		setOrderID(docRef.id);
		setValues(initialState);
    setItems([]);
	};

  return (
    <div >
        <h1 className='ckeckTitle'>Check-Out</h1>
        <form action="" onSubmit={onSubmit} className='checkoutForm'>

          <div>
            <h3>Nombre</h3>
            <TextField 
              placeholder='Nombre Completo'
              name='name'
              value={values.name}
              onChange={handleOnChange}
            />
          </div>

          <div>
            <h3>Apellido</h3>
            <TextField
              placeholder='Apellido'
              name='lastName'
              value={values.lastName}
              onChange={handleOnChange}
            />
          </div>
          
          <div>
            <h3>Numero de celular</h3>
            <TextField
              placeholder='Ej: 1132326423'
              name='telephone'
              value={values.telephone}
              onChange={handleOnChange}
            />
          </div>
          
          <div>
            <h3>Correo electronico</h3>
            <TextField
              placeholder='Example@example.com'
              name='email'            
              value={values.email}
              onChange={handleOnChange}
              />
          </div>

          { values.email != '' ? <button >Generar Orden</button> : null }
        </form>
        {orderID && <Alert severity="success" className='messageAlert'>Su pedido se genero con exito, su numero de orden es: {orderID}</Alert>}
    </div>
  )
}

export default Checkout