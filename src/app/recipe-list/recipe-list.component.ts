import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { RecipeService } from '../services/recipe.service';
import { DateFormatPipe } from '../pipes/date-format.pipe';

@Component({
  standalone: true,
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  imports: [DateFormatPipe],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  filteredRecipes: Recipe[] = [];
  showVegetarianOnly: boolean = false;
  debugOutput: string = '';

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
    this.filteredRecipes = [...this.recipes];
    this.updateDebugOutput();
  }
  updateDebugOutput() {
    this.debugOutput = `Total Recipes: ${this.recipes.length}, Filtered Recipes: ${this.filteredRecipes.length}`;
  }

  toggleFilter(): void {
    this.showVegetarianOnly = !this.showVegetarianOnly;
    this.filteredRecipes = this.showVegetarianOnly
      ? this.recipes.filter((recipe) => recipe.vegetarian)
      : [...this.recipes];
    this.updateDebugOutput();
  }
  addRecipe(): void {
    const newRecipe: Recipe = {
      id: this.recipes.length + 1,
      name: 'New Recipe',
      ingredients: ['Ingredient 1', 'Ingredient 2'],
      vegetarian: false,
      steps: ['Step 1', 'Step 2'],
      createdAt: new Date(),
    };

    this.recipeService.addRecipe(newRecipe);

    this.recipes = this.recipeService.getRecipes();
    this.filteredRecipes = this.showVegetarianOnly
      ? this.recipes.filter((recipe) => recipe.vegetarian)
      : [...this.recipes];
    this.updateDebugOutput();
  }
  deleteRecipe(id: number) {
    this.recipeService.deleteRecipe(id);
    this.recipes = this.recipeService.getRecipes();
    this.updateDebugOutput();
  }
}
