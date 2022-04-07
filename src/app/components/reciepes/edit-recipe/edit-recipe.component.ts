import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params,} from "@angular/router";

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit {
id: number |undefined;
editMode: boolean = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;// check if params has the id then set edit mode to true
        //edit mode gets assigned the value of the check: if params have a id property if yes
            // it will be the string value with id else it will be underfined
        console.log(this.editMode);
      }
    )
  }

}
