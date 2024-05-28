import React from 'react';
import Header from './Header';
import Footer from './Footer';
import RecipeList from './RecipeList';
import RecipeForm from './RecipeForm';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import RecipeSuggestion from './RecipeSuggestion';
import NutritionInfo from './NutritionInfo';
import MealPlan from './MealPlan';
import Community from './Community';

function App() {
  return (
    <div className="container mx-auto">
      <Header />
      <main>
        <RecipeList />
        <RecipeForm />
        <LoginForm />
        <SignupForm />
        <RecipeSuggestion />
        <NutritionInfo />
        <MealPlan />
        <Community />
      </main>
      <Footer />
    </div>
  );
}

export default App;
