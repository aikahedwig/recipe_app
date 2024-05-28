import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import RecipeList from './components/RecipeList';
import RecipeForm from './components/RecipeForm';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import RecipeSuggestion from './components/RecipeSuggestion';
import NutritionInfo from './components/NutritionInfo';
import MealPlan from './components/MealPlan';
import Community from './components/Community';

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

ReactDOM.render(<App />, document.getElementById('app'));
