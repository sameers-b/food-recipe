import React from 'react'
import './Card.css'

import RecipeCard from '../RecipeCard/RecipeCard'

const SuperDeliciouCard = () => {

   return (
      <>
         <div className="super-delicious-container">
            <h1> Super Delicious</h1>
            <RecipeCard/>
            <RecipeCard/>
            <RecipeCard/>
         </div>
         <div className="sweet-tooth-container">
            <h1>Sweet Tooth</h1>
            <RecipeCard/>
            <RecipeCard/>
            <RecipeCard/>
         </div>
      </>
   )
}

export default SuperDeliciouCard
