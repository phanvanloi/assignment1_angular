import { Component } from '@angular/core';
import { Validator, FormBuilder } from '@angular/forms';
import { IProduct } from 'src/app/interfaces/products';
import { ProductService } from 'src/app/service/product.service';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {
  productForm = this.formBuilder.group({
    name: [''],
    price: [0],
    image: ['']
  })

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private productService: ProductService) {

  }
  onHandleSubmit() {
    const product: IProduct = {
      name: this.productForm.value.name || "",
      price: this.productForm.value.price || 0,
      image: this.productForm.value.image || "",
    }

    this.productService.addProduct(product).subscribe((product) => {
      const result = alert("Thêm sản phẩm thành công")
      this.router.navigateByUrl('admin/product')
    })
  }
}
