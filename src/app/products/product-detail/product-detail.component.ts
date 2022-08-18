import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  selectedProduct: IProduct | undefined;
  constructor(private route:ActivatedRoute
    ,private router: Router,
    private productService: ProductService) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.get(id)
        .subscribe(
          (product: IProduct) => this.selectedProduct = product
        );

  }
  back(){
    this.router.navigate(['/products',])

  }
}
///private router: Router พาไปไหนใช้ router line14  เช่นอยากพาไปหน้าอื่น