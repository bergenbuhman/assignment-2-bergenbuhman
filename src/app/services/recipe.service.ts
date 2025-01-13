import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private recipes: Recipe[] = [
    {
      id: 1,
      name: 'Vegetable Stir Fry',
      ingredients: ['Broccoli', 'Carrots', 'Bell Peppers'],
      vegetarian: true,
      steps: ['Chop vegetables', 'Stir fry in pan'],
      createdAt: new Date('2024-01-01'),
    },
    {
      id: 2,
      name: 'Chicken Curry',
      ingredients: ['Chicken', 'Curry Paste', 'Coconut Milk'],
      vegetarian: false,
      steps: ['Cook chicken', 'Add curry paste', 'Add coconut milk'],
      createdAt: new Date('2024-01-02'),
    },
  ];

  getRecipes() {
    return this.recipes;
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }

  updateRecipe(id: number, updatedRecipe: Recipe) {
    const index = this.recipes.findIndex((recipe) => recipe.id === id);
    if (index > -1) {
      this.recipes[index] = updatedRecipe;
    }
  }

  deleteRecipe(id: number) {
    this.recipes = this.recipes.filter((recipe) => recipe.id !== id);
  }
}
