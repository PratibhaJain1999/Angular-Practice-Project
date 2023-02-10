import { outputAst } from '@angular/compiler';
import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { product } from '../product/product modal';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
@Output()onNewProduct=new EventEmitter();


newProduct:any;
@ViewChild('newForm')newForm!:NgForm


  constructor() { }

  ngOnInit(): void {
    
  }
  
  saveProduct(newForm:NgForm){
        this.newProduct= new product(newForm.value.name,newForm.value.description,newForm.value.image);
 this.onNewProduct.emit(this.newProduct);
  }
  clearAll(){
this.newForm.reset();
}

}
