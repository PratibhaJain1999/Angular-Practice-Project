import{productFamily} from  './shared/productFamily.module' ;  

export class ShoppingListServices{
    products:productFamily[]=[
        new productFamily('Vitamin C Facemask',50),
        new productFamily('Facewash',100)
      ];
      getServices(){
        return this.products;
      }
      

}