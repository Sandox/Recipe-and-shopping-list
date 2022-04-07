import {Component, Input, OnInit, EventEmitter} from '@angular/core';
import {Recipe} from "../receipe.model";
import {Output} from "@angular/core";
import {RecipeService} from "../receipe.service";
import {Ingredient} from "../../../Shared/ingredient.model";

@Component({
  selector: 'app-reciepe-item',
  templateUrl: './reciepe-item.component.html',
  styleUrls: ['./reciepe-item.component.css']
})
export class ReciepeItemComponent implements OnInit {

  @Input() recipe: Recipe;
  @Input() index: number | undefined;

  constructor(private service: RecipeService) {
    this.recipe = new Recipe('','','',[
      new Ingredient('Meat',1),
      new Ingredient('Marinade',2)
    ]);
  }

  ngOnInit(): void {
  }



}
