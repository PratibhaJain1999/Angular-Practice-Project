import { Component, EventEmitter, Input, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { product } from '../product modal';
import{productServices} from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
products:product[]=[
  ]
  
  
@Output()onProductSelected=new EventEmitter();
@Output()newProductBtn=new EventEmitter();
@Input() productAdded:any;
@Input() deleteProduct:any
  constructor( private productService:productServices) {}

  ngOnInit(): void {
    console.log(this.products);
    this.products=this.productService.getProduct();
    this.productService.getValue().subscribe((value) =>{
      this.products=value;
    })
    
  }
  ngOnChanges(changes:SimpleChanges){
    if(changes['productAdded'] && changes['productAdded'].currentValue){
      this.products.push(changes['productAdded'].currentValue)
      this.productService.updateData(this.products);
    };
    if (changes['deleteProduct'] && changes ['deleteProduct'].currentValue){
      let index =this.products.indexOf(changes['deleteProduct'].currentValue);
      this.products.splice(index,1);
      this.productService.updateData(this.products);


    }

  }
  productsSelection(product:product){
   this.onProductSelected.emit(product);
  }
  newProductAdd(){
    this.newProductBtn.emit(true)

  }

}
