import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AllReciepesComponent} from "../components/reciepes/all-reciepes/all-reciepes.component";
import {ShoppinglistComponent} from "../components/shoppinglist/shoppinglist.component";
import {RecipePlaceholderComponent} from "../components/reciepes/recipe-placeholder/recipe-placeholder.component";
import {ReciepeDetailComponent} from "../components/reciepes/reciepe-detail/reciepe-detail.component";
import {EditRecipeComponent} from "../components/reciepes/edit-recipe/edit-recipe.component";

const appRoutes: Routes = [
  {path:'', redirectTo:'/recipes', pathMatch: 'full'},
  //override the state when to only redirect when the full patch is empty not [prefix which is default ]
  {path:'recipes', component: AllReciepesComponent, children: [
      {path:'new', component: EditRecipeComponent},
      {path:'', component: RecipePlaceholderComponent},
      {path:':id', component: ReciepeDetailComponent},
      {path:':id/edit', component: EditRecipeComponent},
    ]},

  {path:'shopping-list', component: ShoppinglistComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
