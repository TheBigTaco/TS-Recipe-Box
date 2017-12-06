import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <div class="form">
      <form>
        <h2>Enter your recipe:</h2>
        <input [class]="showName()" [value]="name" (input)="name = $event.target.value" type="text">
        <button (click)="changeRecipeName()" [class]="showName()" class="btn">Recipe Name</button>
        <br>
        <input [class]="showIngredient()" [value]="ingredient" (input)="ingredient = $event.target.value" type="text">
        <button [class]="showIngredient()" (click)="addIngredient()">Add Ingredient</button>
        <button [class]="showIngredient()" (click)="nextStep()">Next Step</button>
        <br>
        <input [class]="showDirection()" [value]="direction" (input)="direction = $event.target.value" type="text">
        <button [class]="showDirection()" (click)="addDirection()">Add Direction</button>
        <br>
        <button [class]="showDirection()" (click)="previousStep2()">Previous Step</button>
        <button [class]="showDirection()" id="next" (click)="nextRecipe()">Next Recipe</button>
      </form>
    </div>
    <div class="output">
    <ul>
    <li class="recipe" *ngFor="let recipe of recipes">
    <div class="image-wrap"></div>
    <div class="content-wrap">
    <h3 class="recipe-title">{{recipe.name}}</h3>
    <div class="items-a"><span class="subheader">Ingredients:</span><ul>
    <li *ngFor="let ingredient of recipe.ingredients">
    {{ingredient.name}}
    </li>
    </ul>
    </div>
    <div class="items-b"><span class="subheader">Directions:<br></span>
    <ul>
    <li *ngFor="let direction of recipe.directions">
    {{direction.name}}
    </li>
    </ul>
    </div>
    <button class="delete" (click)="delete(recipe)">Delete</button>
    </div>
    </li>
    </ul>
    </div>
  </div>
  `
})

export class AppComponent {
  public recipes: Recipe[] = [];
  public ingredients: Ingredient[] = [];
  public directions: Direction[] = [];
  public name: string;
  public ingredient: string;
  public direction: string;
  public currentlyActive: string = "name";
  constructor() {
    this.name = "";
    this.ingredient = "";
    this.direction = "";
  }
  delete(recipe) {
    let numver = this.recipes.indexOf(recipe);
    this.recipes.splice(numver, 1);
    this.currentlyActive = "name";
  }
  changeRecipeName() {
    this.recipes.push(new Recipe(this.name, this.ingredients, this.directions));
    this.name = "";
    this.currentlyActive = "ingredient";
  }

  addIngredient() {
    this.ingredients.push(new Ingredient(this.ingredient));
    this.ingredient = "";
  }

  addDirection() {
    this.directions.push(new Direction(this.direction));
    this.direction = "";
  }

  nextRecipe() {
    this.directions = [];
    this.ingredients = [];
    this.currentlyActive = "name";
  }

  nextStep() {
    this.currentlyActive = "direction";
  }
  previousStep() {
    this.currentlyActive = "name";
  }
  previousStep2() {
    this.currentlyActive = "ingredient";
  }

  showName() {
    if(this.currentlyActive === "name") {
      return "name-form";
    }
  }

  showIngredient() {
    if(this.currentlyActive === "ingredient") {
      return "ingredient-form";
    }
  }
  showDirection() {
    if(this.currentlyActive === "direction") {
      return "direction-form";
    }
  }
}


export class Recipe {
  constructor(public name: string, public ingredients: Ingredient[], public directions: Direction[]) {}
}

export class Ingredient {
  constructor(public name: string) {}
}

export class Direction {
  constructor(public name: string) {}
}
