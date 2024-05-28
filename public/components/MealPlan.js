// MealPlan.js
import React, { useState, useEffect } from 'react';

const MealPlan = () => {
    const [mealPlan, setMealPlan] = useState([]);

    useEffect(() => {
        // ここでAPIから食事プランデータを取得します
        fetch('/api/meal_plan')
            .then(response => response.json())
            .then(data => setMealPlan(data));
    }, []);

    return (
        <div>
            <h2>Your Meal Plan</h2>
            <ul>
                {mealPlan.map(meal => (
                    <li key={meal.id}>{meal.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default MealPlan;
