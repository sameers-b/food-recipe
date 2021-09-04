import React from 'react'
import './pCard.css'

import Card from './Card'

const PopularCard = () => {
   return (
      <>
         <div className="popular-container">
         <h1>Popular Categories</h1>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
         </div>
      </>
   )
}

export default PopularCard
