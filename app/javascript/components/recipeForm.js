import React, { useState } from 'react';
import axios from 'axios';

function RecipeForm() {
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [nutritionalInfo, setNutritionalInfo] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const recipe = { name, ingredients, instructions, nutritionalInfo };
    axios.post('/api/recipes', recipe)
      .then(response => {
        setName('');
        setIngredients('');
        setInstructions('');
        setNutritionalInfo('');
        alert('レシピが正常に作成されました！');
      })
      .catch(error => console.error('レシピ作成エラー:', error));
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <h2 className="text-xl mb-4">新しいレシピを作成</h2>
      <div className="mb-2">
        <label className="block">名前:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 w-full"
          required
        />
      </div>
      <div className="mb-2">
        <label className="block">材料:</label>
        <textarea
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="border p-2 w-full"
          required
        ></textarea>
      </div>
      <div className="mb-2">
        <label className="block">作り方:</label>
        <textarea
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          className="border p-2 w-full"
          required
        ></textarea>
      </div>
      <div className="mb-2">
        <label className="block">栄養情報:</label>
        <textarea
          value={nutritionalInfo}
          onChange={(e) => setNutritionalInfo(e.target.value)}
          className="border p-2 w-full"
        ></textarea>
      </div>
      <button type="submit" className="bg-blue-600 text-white p-2 rounded">送信</button>
    </form>
  );
}

export default RecipeForm;
