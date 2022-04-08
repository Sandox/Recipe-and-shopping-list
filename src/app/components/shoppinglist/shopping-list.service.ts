import {Ingredient} from "../../Shared/ingredient.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  ingredientsChanged = new Subject<Ingredient[]>();
  itemEditting = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Mangos', 12),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingr: Ingredient) {
    this.ingredients.push(ingr);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]){
    this.ingredients.push(...ingredients); //Spread Operator
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  getIngredientSelected(index: number){
    return this.ingredients[index];
  }

  updateIngredientSelected(index: number, newIngredient:Ingredient){
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index: number){
    this.ingredients.splice(index, 1);//Splice start at a specific index and 2nd argument: how many element to remove[splice]
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
