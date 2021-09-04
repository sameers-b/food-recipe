import React from 'react'
import './pCard.css'

const Card = () => {
   const recipeImageUrl =
  "https://images.unsplash.com/photo-1540660290370-8aa90e451e8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80";
const recipeTitle = "Name";
const recipeUrl = "#";
   return (
      <>
         <div className="p-recipe-card">
      <a href={recipeUrl} className="p-link-wrap">
        <div className="p-img-box">
          <img src={recipeImageUrl} alt={recipeTitle} />
        </div>
        <div className="p-title-box">{recipeTitle}</div>
      </a>
    </div>
      </>
   )
}

export default Card
