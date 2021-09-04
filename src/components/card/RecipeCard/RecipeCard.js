import "./RecipeCard.css";

const RecipeCard = () => {
  const recipeImageUrl =
  "https://images.unsplash.com/photo-1540660290370-8aa90e451e8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80";
const recipeTitle = "My Recipe Name";
const recipeUrl = "#";
 return (
    <>
       <div className="recipe-card">
      <a href={recipeUrl} className="link-wrap">
        <div className="img-box">
          <img src={recipeImageUrl} alt={recipeTitle} />
        </div>
        
        <p>star</p>
        <div className="title-box">{recipeTitle}</div>
      </a>
    </div>
    </>
  );
};

export default RecipeCard;
