import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { StarComponent } from 'src/app/shared/star.component';
import { IProduct } from '../product';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {


  imageWidth = 50;
  imageMargin = 2;
  isShowImage = true;
  filteredProduct: IProduct[] = [];
  products: IProduct[] = []
  constructor(private productService: ProductService) {

  }
  ngOnInit(): void {
    this.productService.getAllProduct()
      .subscribe(
        (products) => {
          this.products = products
          this.filteredProduct = this.products;
        }
        
      )

  }



  private _searchText = '';
  get searchText(): string {
    return this._searchText;
  }

  // TODO: Move this method to product service
  set searchText(value: string) {
    this._searchText = value;
    this.filteredProduct = this.performFilter(value);
  }



  performFilter(value: string) {
    if (value == '' || !value) return this.products;
    return this.filteredProduct = this.products.filter(p => p.productName.toLowerCase().includes(value.toLowerCase()))
  }

  @ViewChildren(StarComponent) children!: QueryList<StarComponent>;

  getPriceLevel(p: IProduct) {
    let cssClass = { 'high-price': false, 'low-price': false }
    if (p.price > 20) cssClass['high-price'] = true;
    else cssClass['low-price'] = true;
    return cssClass
  }

  getFontSize(p: IProduct) {
    let style = { 'font-size': 'auto' }
    if (p.productName.length > 7) style['font-size'] = '10px';
    return style;
    //{'font-size':(p.productName.length>5)? '10px':'auto'}
  }

  toggleImage() {
    this.isShowImage = !this.isShowImage
  }

  onRating(newStarRating: number, i: number) {
    this.products[i].starRating = newStarRating;

  }
  vote(i: number){
    this.children.get(i)?.ratingClicked();
  }
}
