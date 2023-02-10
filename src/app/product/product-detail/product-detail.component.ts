import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { product } from '../product modal';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
@Input() productDet!:product;
@Output()productToBeDeleted= new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  deleteProduct(){
    this.productToBeDeleted.emit(this.productDet)
  }

}
