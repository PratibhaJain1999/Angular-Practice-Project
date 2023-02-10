import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { product } from '../../product modal';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Output()productSelected=new EventEmitter();
  @Input() productItem!:product

  constructor() { }

  ngOnInit(): void {
  }
  onProductSelected(){
    this.productSelected.emit();

  }

}
