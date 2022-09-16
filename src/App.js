
import React from 'react';
import './App.css';
import NavBar from './components/navBar/navBar';
import ItemListContainer from './components/ItemListContainer/itemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GetItem from './components/itemDetailContainer/itemDetailContainer';
import Cart from './components/cart/cart';
import ItemsProvider from './components/cart/cartContext';

const App = () => {
    return(
    <BrowserRouter>
    <ItemsProvider> 
    <div>
    <NavBar />
    <Routes>
    <Route path='/' element={<ItemListContainer nombre ='Fernando Breme'/>}/>
    <Route path='/details/:id'element={<GetItem />} />
    <Route path='/cart'element={<Cart />} />
    </Routes>
    </div>
    </ItemsProvider>
    </BrowserRouter>
);
};
    
      
    


export default App;