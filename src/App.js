
import React from 'react';
import './App.css';
import NavBar from './components/navBar/navBar';
import ItemListContainer from './components/ItemListContainer/itemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GetItem from './components/itemDetailContainer/itemDetailContainer';
import Cart from './components/cart/cart';
import ItemsProvider from './components/cart/cartContext';
import Checkout from './components/cart/checkout';
import Category from './components/ItemListContainer/category';

const App = () => {
    return(
    <ItemsProvider>
    <BrowserRouter>
    <div>
    <NavBar />
    <Routes>
    <Route path='/' element={<ItemListContainer nombre ='Fernando Breme'/>}/>
    <Route path='/details/:id'element={<GetItem />} />
    <Route path='/cart'element={<Cart />} />
    <Route path='/checkout'element={<Checkout />} />
    <Route path='/category/:category'element={<Category />} />
    </Routes>
    </div>
    </BrowserRouter>
    </ItemsProvider>
    
);
};
    
      
    


export default App;