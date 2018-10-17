import { Subject } from 'rxjs';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
        "Pasta",
        "Delicious Pasta",
        "https://images.media-allrecipes.com/images/56589.png",
         [
             new Ingredient('Macroni', 100),
             new Ingredient('Red Sauce',20)
         ]),
    new Recipe("Pizza",
            "Chessy Pizza",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWCrleTmsgSNGHaOeKXryvvXtDLkeVcNcsAn70j2p6pUnURVabGg",
            [
                new Ingredient('Veggies',50),
                new Ingredient('Cheese',70)
            ])
  ];

  constructor() {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
