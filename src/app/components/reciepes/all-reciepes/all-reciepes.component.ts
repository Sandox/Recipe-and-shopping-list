import { Component, OnInit } from '@angular/core';
import {Recipe} from "../receipe.model";
import {RecipeService} from "../receipe.service";

@Component({
  selector: 'app-all-reciepes',
  templateUrl: './all-reciepes.component.html',
  styleUrls: ['./all-reciepes.component.css'],
  providers: [RecipeService]
})
export class AllReciepesComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

}
