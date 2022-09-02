import { dividerClasses } from '@mui/material';
import React from 'react';
import './App.css';
import NavBar from './components/navBar/navBar';
import ItemListContainer from './components/ItemListContainer/itemListContainer';
import CardItem from './components/ItemListContainer/item';



class App extends React.Component {
  render(){
    return(
      <>
      <NavBar />
      <ItemListContainer nombre ='Fernando Breme'/>
      </>
    )
  }
}

export default App;