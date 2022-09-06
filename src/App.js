
import React from 'react';
import './App.css';
import NavBar from './components/navBar/navBar';
import ItemListContainer from './components/ItemListContainer/itemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GetItem from './components/itemDetailContainer/itemDetailContainer';

const App = () => {
    return(
    <BrowserRouter>
    <div>
    <NavBar />
    <Routes>
    <Route path='/' element={<ItemListContainer nombre ='Fernando Breme'/>}/>
    <Route path='/details/:id'element={<GetItem />} />
    </Routes>
    </div>
    </BrowserRouter>
);
};
    
      
    


export default App;