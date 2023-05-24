import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/products';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent {
  products!: IProduct[]

  constructor(private productService: ProductService) {
    this.productService.getProducts().subscribe(data => {
      this.products = data
    })
  }

  removeProdcut(id: number) {
    this.productService.deleteProduct(id).subscribe(() => {
      this.productService.getProducts().subscribe(data => {
        this.products = data
      })
    })
  }
}
