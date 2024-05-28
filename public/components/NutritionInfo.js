// NutritionInfo.js
import React from 'react';

const NutritionInfo = ({ protein, calorie, sodium, carbohydrate }) => {
    return (
        <div>
            <h3>Nutrition Information</h3>
            <p>Protein: {protein}g</p>
            <p>Calories: {calorie}kcal</p>
            <p>Sodium: {sodium}mg</p>
            <p>Carbohydrates: {carbohydrate}g</p>
        </div>
    );
};

export default NutritionInfo;
