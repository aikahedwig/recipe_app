// RecipeSuggestion.js
import React, { useState, useEffect } from 'react';

const RecipeSuggestion = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        // ここでAPIからレシピデータを取得します
        fetch('/api/recipes')
            .then(response => response.json())
            .then(data => setRecipes(data));
    }, []);

    return (
        <div>
            <h2>Recipe Suggestions</h2>
            <ul>
                {recipes.map(recipe => (
                    <li key={recipe.id}>{recipe.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default RecipeSuggestion;
