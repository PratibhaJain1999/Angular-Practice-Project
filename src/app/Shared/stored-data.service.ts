import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SelectControlValueAccessor } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { productServices } from '../product/product.service';
import { productFamily } from '../shopping-list/shared/productFamily.module';

@Injectable({
  providedIn: 'root'
})
export class StoredDataService {

  constructor(private http:HttpClient,private productServices:productServices) {


  }
  storedData(){
    const productss=this.productServices.getProduct();
    this.http.put('https://pratibhapractice-default-rtdb.firebaseio.com/product.json',productss).subscribe(responsiveData=>{

    });
  }
  fetchProduct(){
    this.http.get('https://pratibhapractice-default-rtdb.firebaseio.com/product.json').subscribe(responsiveData=>{
      this.productServices.setValue(responsiveData)
  });
}

  
}
/*'https://pratibhapractice-default-rtdb.firebaseio.com'*/
