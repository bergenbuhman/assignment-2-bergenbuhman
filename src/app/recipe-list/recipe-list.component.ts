import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe.model'; // Make sure you import the Recipe model

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = []; // Declare recipes as an array of Recipe objects

  constructor() {}

  ngOnInit(): void {
    // Example: you can fetch recipes from a service or initialize with data
    this.recipes = [
      {
        id: 1,
        name: 'Spaghetti',
        ingredients: ['pasta', 'tomato sauce', 'garlic'],
        vegetarian: true,
        steps: ['Boil pasta', 'Prepare sauce'],
        createdAt: new Date(),
      },
      {
        id: 2,
        name: 'Chicken Curry',
        ingredients: ['chicken', 'spices', 'onion'],
        vegetarian: false,
        steps: ['Cook chicken', 'Make curry'],
        createdAt: new Date(),
      },
    ];
  }
}
