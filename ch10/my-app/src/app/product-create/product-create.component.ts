import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  imports: [ReactiveFormsModule],
  providers: [
    { provide: ProductsService, useClass: ProductsService },
  ],
  selector: 'app-product-create',
  styleUrl: './product-create.component.css',
  templateUrl: './product-create.component.html',
})

export class ProductCreateComponent {
  productForm = new FormGroup({
    title: new FormControl('', { nonNullable: true }),
    price: new FormControl<number | undefined>(undefined, { nonNullable: true }),
    category: new FormControl('', { nonNullable: true })
  });

  constructor(private productsService: ProductsService, private router: Router) {}

  createProduct() {
    this.productsService.addProduct(this.productForm.value).subscribe(() => {
      this.router.navigate(['/products']);
    });
  }
}
