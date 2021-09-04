import React from 'react'
import './headerCard.css'
import {FiArrowRight } from "react-icons/fi";
import menu1 from "../../../image/menu1.jpg"

const HeaderCard = () => {
   return (
      <>
        <div className="head-card-container">
           <div className="row menu1">
              <img src={menu1} />
           </div>
           <div className="row menu-contant">
              <p>85% would make this again</p>
              <h2>Mighty Super Cheesecake</h2> 
              <p id="menu-p2">Look no further for a creamy and ultra smooth classic cheesecake recipe! no one can deny its simple decadence.</p>
              <div id="menu-next"><FiArrowRight/></div>
           </div>
        </div>
      </>
   )
}

export default HeaderCard ;
