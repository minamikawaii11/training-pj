import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

 
  imageWidth= 50;
  imageMargin = 2;
  isShowImage =true;


  private _searchText='';
  get searchText():string{
    return this._searchText;
  }
  set searchText(value: string){
      this._searchText = value;
      this.filteredProduct = this.performFilter(value);
  }

  performFilter(value: string){
    if(value == '' || !value ) return this.products; 
    return this.filteredProduct = this.products.filter(p => p.productName.toLowerCase().includes(value))
  }

  products: IProduct[] = [

    {
      "productId": 1,
      "productName": "Leaf Rake",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2021",
      "description": "Leaf rake with 48-inch wooden handle.",
      "price": 19.95,
      "starRating": 3.2,
      "imageUrl": "assets/images/leaf_rake.png"
    },
    {
      "productId": 2,
      "productName": "Garden Cart",
      "productCode": "GDN-0023",
      "releaseDate": "March 18, 2021",
      "description": "15 gallon capacity rolling garden cart",
      "price": 32.99,
      "starRating": 4.2,
      "imageUrl": "assets/images/garden_cart.png"
    },
    {
      "productId": 5,
      "productName": "Hammer",
      "productCode": "TBX-0048",
      "releaseDate": "May 21, 2021",
      "description": "Curved claw steel hammer",
      "price": 8.9,
      "starRating": 4.8,
      "imageUrl": "assets/images/hammer.png"
    },
    {
      "productId": 8,
      "productName": "Saw",
      "productCode": "TBX-0022",
      "releaseDate": "May 15, 2021",
      "description": "15-inch steel blade hand saw",
      "price": 11.55,
      "starRating": 3.7,
      "imageUrl": "assets/images/saw.png"
    },
    {
      "productId": 10,
      "productName": "Video Game Controller",
      "productCode": "GMG-0042",
      "releaseDate": "October 15, 2020",
      "description": "Standard two-button video game controller",
      "price": 35.95,
      "starRating": 4.6,
      "imageUrl": "assets/images/xbox-controller.png"
    }
  ];

  filteredProduct: IProduct[] = this.products;

  getPriceLevel(p: IProduct){
    let cssClass ={'high-price':false,'low-price':false}
    if(p.price>20) cssClass['high-price'] = true;
    else cssClass['low-price'] = true;
    return cssClass
  }

  getFontSize(p : IProduct){
    let style = {'font-size':'auto'}
    if(p.productName.length>7) style['font-size'] = '10px';
    return style;
    //{'font-size':(p.productName.length>5)? '10px':'auto'}
  }

  toggleImage(){
    this.isShowImage = !this.isShowImage
  }
}
