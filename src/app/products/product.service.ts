import { Injectable } from '@angular/core';
import { IProduct } from './product';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})
export class ProductService {



  constructor(private http:HttpClient) { }

  getAllProduct(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('http://localhost:3000/products');

  }
  get(id: number): Observable<IProduct> {
    return this.http.get<IProduct>(`http://localhost:3000/products/${id}`);
  }

  // get(id: number): IProduct {
  //   let filteredProduct = this.products.filter(p => p.productId == id);
  //   return filteredProduct[0];
  // }
}
