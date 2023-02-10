import { Component, OnInit } from '@angular/core';
import{productFamily} from './shared/productFamily.module'
import { ShoppingListServices } from './shopping-list.services';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
product:productFamily[]=[
 
]
products={};
editItemIndex:any

  constructor( private ShoppingListServices:ShoppingListServices) { }

  ngOnInit(): void {
    this.product=this.ShoppingListServices.getServices();

  }
  addData(event:any){
    this.product.push(event);

  }
  productSelected(index:number){
    this.products=this.product[index];
    this.editItemIndex=index;
  }
  productChanges(event:any){
    this.product[this.editItemIndex]=event
  }
  deleteProduct(event:any){
    this.product.splice(this.editItemIndex,1)
  }

}
