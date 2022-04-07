import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Recipe} from "../receipe.model";
import {RecipeService} from "../receipe.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-reciepelist',
  templateUrl: './reciepelist.component.html',
  styleUrls: ['./reciepelist.component.css']
})
export class ReciepelistComponent implements OnInit {

  recipes: Recipe[] | undefined;

  constructor(private recipeService: RecipeService,
              private router: Router,
              private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes()
  }

onNewRecipe(){
    this.router.navigate(['new'], {relativeTo: this.route})
}



}
