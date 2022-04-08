import {Component, OnInit, OnDestroy} from '@angular/core';
import {Ingredient} from "../../Shared/ingredient.model";
import {ShoppingListService} from "./shopping-list.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppinglistComponent implements OnInit, OnDestroy {

  ingredients: Ingredient[] =[];
  private idChangeSubscription: Subscription = new Subscription;
  //Store the subscription in a property so that we can clean[ngOnDestroy] it when leave component

  constructor(private service: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.service.getIngredients();
    //We subscribe to the Change of Ingredients event
    this.idChangeSubscription = this.service.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    )
  }

  onEditIngrident(index: number){
    this.service.itemEditting.next(index);
    //emit a new value[index] and pass the index to the subject so we can listen to it from another component
  }

  ngOnDestroy():void {
    this.idChangeSubscription.unsubscribe();
  }



}
