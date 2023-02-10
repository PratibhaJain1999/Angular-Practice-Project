import { BehaviorSubject, Observable } from "rxjs";
import { observableToBeFn } from "rxjs/internal/testing/TestScheduler";
import{product} from"./product modal";
 
export  class productServices{
    private productList!:BehaviorSubject<product[]>;
    products:product[]=[
        new product('MamaEarth Shampoo','description of product1',"https://honasa-mamaearth-production.imgix.net/o/n/onion-hair-shampoo-250ml-with-ingredient_2.jpg?auto=format&fit=crop&w=332&auto=compress"),
        new product('Loreal Shampoo','description of product2',"https://images-eu.ssl-images-amazon.com/images/I/31uOGjzyn4L._SX300_SY300_QL70_FMwebp_.jpg"),
        new product('WoW Shampoo','description of product3',"https://rukminim1.flixcart.com/image/416/416/k3erngw0/shampoo/z/u/8/300-hard-water-defense-shampoo-300-ml-wow-skin-science-original-imafmjbgtvcen9nh.jpeg?q=70"),
      
        ]
    
        constructor() {
            this.productList = new BehaviorSubject<product[]>(this.products);
            
        }
        getProduct(){
            return this.products;
        }
        updateData(productss:any){
            this.products = productss;


        }
     setValue(value:any){
        this.productList.next(value)
     }
     getValue() : Observable<product[]> {
        return this.productList.asObservable()

     }

}