import { Component, ElementRef, EventEmitter, Input, OnInit, Output, SimpleChange, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { productFamily } from '../shared/productFamily.module';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  // @ViewChild('name')nameRef!: ElementRef;
  // @ViewChild('amount')amountRef!:ElementRef;
  @Output()productAdd=new EventEmitter();
  @Output()productChanges=new EventEmitter();
  @Output()deleteProduct=new EventEmitter();
  @Input()productSelected:any
  @ViewChild('form')productForm!:NgForm
  editItem=false
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(changes:SimpleChanges){
    if(changes['productSelected'].currentValue && changes['productSelected'].currentValue.name){
      this.editItem=true;
      this.productForm.setValue({
        name:changes['productSelected'].currentValue.name,
        amount:changes['productSelected'].currentValue.amount
      })

    }
  }
  
  addProduct(form:NgForm){
   
  
    const newProduct=new productFamily(form.value.name,form.value.amount);
    if(this.editItem){
      this.productChanges.emit(newProduct);


    }
    else{
this.productAdd.emit(newProduct)

    }
    form.reset();
  }
  clearAll(){
this.productForm.reset()
this.editItem=false;
  }
  deleteAll(){
    this.deleteProduct.emit();
    this.clearAll();

  }
}
