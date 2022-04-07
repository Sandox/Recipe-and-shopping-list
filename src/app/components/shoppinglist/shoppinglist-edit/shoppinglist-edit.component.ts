import {Component, ElementRef, OnInit, ViewChild, EventEmitter, Output} from '@angular/core';
import {Ingredient} from "../../../Shared/ingredient.model";
import {ShoppingListService} from "../shopping-list.service";

@Component({
  selector: 'app-shoppinglist-edit',
  templateUrl: './shoppinglist-edit.component.html',
  styleUrls: ['./shoppinglist-edit.component.css']
})
export class ShoppinglistEditComponent implements OnInit {

  ingredients: Ingredient[] = [];

  //passing the name of the local reference on our html file through view child
  @ViewChild('nameInput') nameReference:any;
  @ViewChild('amountInput') amountReference:any;


  constructor(private service: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredients = this.service.getIngredients();
  }

  onAddItemIngridents(){
    const newIngredientName = this.nameReference.nativeElement.value;
    const newIngredientAmount = this.amountReference.nativeElement.value;
    const newIngredient = new Ingredient(newIngredientName, newIngredientAmount);
    this.service.addIngredient(newIngredient);
    alert(`Details` + newIngredientName + newIngredientAmount + `.......` + newIngredient)
  }

}
