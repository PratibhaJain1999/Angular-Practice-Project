import { Component, OnInit } from '@angular/core';
import { product } from './product modal';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  selectedProduct:any;
  newProduct=false;
  productAdded:any
  deleteProduct:any

  constructor() { }

  ngOnInit(): void {
  }
  productSelected(product:any){
    this.selectedProduct=product;
    this.newProduct=false;

  }
  productAdd(data:product){
   this.productAdded=data;
   this.selectedProduct='';
   this.newProduct=false;
  }
  newProductBtn(data:any){
    this.newProduct=data;
    this.selectedProduct='';

  }
  productDelete(data:product){
this.newProduct=false;
this.selectedProduct='';
this.deleteProduct=data;

  }

}
