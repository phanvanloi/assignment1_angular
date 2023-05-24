import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interfaces/products';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {
  product!: IProduct

  constructor(
    private router: ActivatedRoute,
    private productService: ProductService) {
    this.router.paramMap.subscribe(params => {
      const id = Number(params.get('id'))
      this.productService.getProduct(id).subscribe(data => {
        this.product = data
      }, error => console.log(error.messange)

      )
    })
  }
}
