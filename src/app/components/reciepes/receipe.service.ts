import {Recipe} from "./receipe.model";
import {Injectable} from "@angular/core";
import {Ingredient} from "../../Shared/ingredient.model";
import {ShoppingListService} from "../shoppinglist/shopping-list.service";
import {Subject} from "rxjs";

@Injectable()
export class RecipeService {

  //receipeSelected = new Subject<Recipe>();

  constructor(private spService: ShoppingListService){}

  private recipes: Recipe[] = [
    new Recipe(
      'World-Famous Beligian Waffle',
      'Mouth-Watering Delicacies!',
      'https://thesaltymarshmallow.com/wp-content/uploads/2018/08/belgian-waffles1.jpg',
      [
        new Ingredient('Eggs',10),
        new Ingredient('Flour',2)
      ]),

    new Recipe(
      'Tasty Pork Ribs','2 Tasty racks pork baby back ribs!',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRq6N2ADIyyZ5bF6RdY2lFHA0EJtrzF47T8yHjdZA2PMtdNnx9_rToLL7x7crUUNSw20U&usqp=CAU',
      [
        new Ingredient('Meat',1),
        new Ingredient('Marinade',2)
      ]),
  ];

  getRecipes(){
    return this.recipes.slice();// Returns a new array which is a copy of the array above in this service
  }

  getRecipe(index: number){
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients:Ingredient[]){
    this.spService.addIngredients(ingredients);
  }
}
