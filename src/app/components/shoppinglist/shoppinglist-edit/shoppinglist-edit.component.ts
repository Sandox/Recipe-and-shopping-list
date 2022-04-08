import {Component, ElementRef, OnInit, ViewChild, EventEmitter, Output} from '@angular/core';
import {Ingredient} from "../../../Shared/ingredient.model";
import {ShoppingListService} from "../shopping-list.service";
import {NgForm} from "@angular/forms";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-shoppinglist-edit',
  templateUrl: './shoppinglist-edit.component.html',
  styleUrls: ['./shoppinglist-edit.component.css']
})
export class ShoppinglistEditComponent implements OnInit {

  @ViewChild('shoppingForm') capturedForm: NgForm;

private subscription: Subscription = new Subscription;
  ingredients: Ingredient[] = [];
  ingredientEditMode = false;
  indexOfIngridentToEdit: number;
  editedIngrident: Ingredient;

  constructor(private service: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredients = this.service.getIngredients();
    this.service.itemEditting.subscribe(
      (index: number) => {
        this.indexOfIngridentToEdit = index;
        this.ingredientEditMode = true;
        this.editedIngrident = this.service.getIngredientSelected(index);
        this.capturedForm.setValue({
          name: this.editedIngrident.name,
          amount: this.editedIngrident.amount

        })
      }
    );
  }

  onAddItemIngridents(form: NgForm){
   const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if(this.ingredientEditMode){// if editMode is true, dont add a new ingrident but update the selected ingrident
      this.service.updateIngredientSelected(this.indexOfIngridentToEdit, newIngredient);
    }else{
      this.service.addIngredient(newIngredient);
    }
    alert(`Details: `+ 'Name: ' +newIngredient.name +' : '+ 'Amount: ' + newIngredient.amount);
    this.ingredientEditMode = false;
    form.reset();
  }

  onClear(){
    this.capturedForm.reset();
    this.ingredientEditMode = false;
    console.log('clicked');
  }

  onDelete(){
    this.service.deleteIngredient(this.indexOfIngridentToEdit);
    this.onClear();
  }

  ngOnDestroy():void {
    this.subscription.unsubscribe();
  }
  // onSubmitForm(_userForm: any){
  //   console.log(`Form Submitted : `, _userForm);
  // }


}
