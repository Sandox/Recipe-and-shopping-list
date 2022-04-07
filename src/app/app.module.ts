import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShoppinglistComponent } from './components/shoppinglist/shoppinglist.component';
import { ShoppinglistEditComponent } from './components/shoppinglist/shoppinglist-edit/shoppinglist-edit.component';
import { ReciepelistComponent } from './components/reciepes/reciepelist/reciepelist.component';
import { ReciepeItemComponent } from './components/reciepes/reciepe-item/reciepe-item.component';
import { ReciepeDetailComponent } from './components/reciepes/reciepe-detail/reciepe-detail.component';
import { HeaderComponent } from './components/header/header.component';
import { AllReciepesComponent } from './components/reciepes/all-reciepes/all-reciepes.component';
import { DropDownDirective } from './Shared/drop-down.directive';
import { ShoppingListService } from './components/shoppinglist/shopping-list.service';
import {AppRoutingModule} from "./app-routing,module/app-routing,module.module";
import { RecipePlaceholderComponent } from './components/reciepes/recipe-placeholder/recipe-placeholder.component';
import { EditRecipeComponent } from './components/reciepes/edit-recipe/edit-recipe.component';


@NgModule({
  declarations: [
    AppComponent,
    ShoppinglistComponent,
    ShoppinglistEditComponent,
    ReciepelistComponent,
    ReciepeItemComponent,
    ReciepeDetailComponent,
    HeaderComponent,
    AllReciepesComponent,
    DropDownDirective,
    RecipePlaceholderComponent,
    EditRecipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
