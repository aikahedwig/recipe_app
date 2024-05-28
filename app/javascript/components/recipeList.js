import React, { useEffect, useState } from 'react';
import axios from 'axios';

function RecipeList() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get('/api/recipes')
      .then(response => setRecipes(response.data))
      .catch(error => console.error('レシピの取得エラー:', error));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">レシピ一覧</h2>
      <ul>
        {recipes.map(recipe => (
          <li key={recipe.id} className="mb-2 p-2 border-b">
            <h3 className="text-lg">{recipe.name}</h3>
            <p>{recipe.ingredients}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeList;
