import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
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

export class ProductCreateComponent implements OnInit{
  productForm: FormGroup<{
    title: FormControl<string>,
    price: FormControl<number | undefined>,
    category: FormControl<string>
  }> | undefined;

  constructor(
    private productsService: ProductsService,
    private router: Router,
    private builder: FormBuilder,
  ) {}

  private buildForm() {
    this.productForm = this.builder.nonNullable.group({
      title: [''],
      price: this.builder.nonNullable.control<number | undefined>(undefined),
      category: ['']
    });
  }

  createProduct() {
    this.productsService.addProduct(this.productForm!.value).subscribe(() => {
      this.router.navigate(['/products']);
    });
  }

  ngOnInit(): void {
    this.buildForm();
  }
}
