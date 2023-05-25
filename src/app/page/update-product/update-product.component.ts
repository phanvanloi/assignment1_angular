import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { ProductService } from 'src/app/service/product.service';
import { IProduct } from 'src/app/interfaces/products';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent {
  product!: IProduct
  productForm = this.formBuilder.group({
    id: [0],
    name: [''],
    price: [0],
    image: ['']
  })

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private router: ActivatedRoute,
    private routers: Router
  ) {
    this.router.paramMap.subscribe(params => {
      const id = Number(params.get('id'))

      this.productService.getProduct(id).subscribe(data => {
        this.product = data;

        this.productForm.patchValue({
          id: data.id,
          name: data.name,
          price: data.price,
          image: data.image
        })
      })
    })
  }

  onHandleSubmit() {
    const product: IProduct = {
      id: this.productForm.value.id || 0,
      name: this.productForm.value.name || "",
      price: this.productForm.value.price || 0,
      image: this.productForm.value.image || "",
    }

    const result = window.confirm("Update sản phẩm")
    if (result) {
      this.routers.navigateByUrl('admin/product')
      this.productService.updateProduct(product).subscribe()
    }
  }
}
