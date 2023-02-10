import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import{FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './product/product.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ProductItemComponent } from './product/product-list/product-item/product-item.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ShoppingListEditComponent } from './shopping-list/shopping-list-edit/shopping-list-edit.component';
import { productServices } from './product/product.service';
import { ShoppingListServices } from './shopping-list/shopping-list.services';

import { NewProductComponent } from './new-product/new-product.component';
import { AuthenticateComponent } from './authenticate/authenticate.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductComponent,
    ShoppingListComponent,
    ProductItemComponent,
    ProductListComponent,
    ProductDetailComponent,
    ShoppingListEditComponent,
    
    NewProductComponent,
         AuthenticateComponent,

  ],
  imports: [
    BrowserModule,ReactiveFormsModule,FormsModule,HttpClientModule
  ],
  providers: [productServices,ShoppingListServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
