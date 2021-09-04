import React from 'react'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import "./App.css";

import Header from './components/Header';
import HeaderCard from './components/card/headerCard/headerCard';
import Card from './components/card/card-section/Card'
import PopularCard from './components/card/PopularCategories/PopularCard';
import Inbox from '././components/inbox/Inbox'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
    <Router>
      <Header/>
      <HeaderCard/>
      <Card/> 
      <PopularCard/>
      <Inbox/>
      <Footer/>
    </Router> 
    </>
  )
}

export default App
