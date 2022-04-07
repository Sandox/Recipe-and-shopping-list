import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../receipe.model";
import {RecipeService} from "../receipe.service";
import {Ingredient} from "../../../Shared/ingredient.model";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-reciepe-detail',
  templateUrl: './reciepe-detail.component.html',
  styleUrls: ['./reciepe-detail.component.css']
})
export class ReciepeDetailComponent implements OnInit {

 recipe: Recipe;
 id: number | undefined;

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router) {

    this.recipe = new Recipe('','','',[
      new Ingredient('Meat',1),
      new Ingredient('Marinade',2)
    ])
  }

  ngOnInit(): void { // reacting to the change/ new id of the recipe id when selecting different recipes but still see other recipes details
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id']; // + cast the id to a number because from the URL it is returned as a String
        //Fetch the new recipe when Id changes
        this.recipe = this.recipeService.getRecipe(this.id);


      }
    )
  }

  onAddToShoppingList(){
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
    alert(`Ingredients added to the shopping list`);
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route})
  }
}
