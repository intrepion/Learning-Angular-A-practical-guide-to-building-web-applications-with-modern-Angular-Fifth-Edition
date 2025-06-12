import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatError, MatFormField, MatInput, MatLabel } from '@angular/material/input';
import { Router } from '@angular/router';
import { priceMaximumValidator } from '../price-maximum.validator';
import { ProductsService } from '../products.service';

@Component({
  imports: [
    MatButton,
    MatError,
    MatFormField,
    MatInput,
    MatLabel,
    ReactiveFormsModule
  ],
  providers: [
    { provide: ProductsService, useClass: ProductsService },
  ],
  selector: 'app-product-create',
  styleUrl: './product-create.component.css',
  templateUrl: './product-create.component.html',
})

export class ProductCreateComponent implements OnInit{
  productForm = new FormGroup({
    title: new FormControl('', {
      nonNullable: true,
      validators: Validators.required
    }),
    price: new FormControl<number | undefined>(undefined, {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.min(1),
        priceMaximumValidator(1000),
      ]
    }),
    category: new FormControl('', { nonNullable: true })
  });

  constructor(
    private productsService: ProductsService,
    private router: Router,
    private builder: FormBuilder,
  ) {}

  private buildForm() {
    this.productForm = this.builder.nonNullable.group({
      title: ['', Validators.required],
      price: this.builder.nonNullable.control<number | undefined>(undefined, {
        validators: [Validators.required, Validators.min(1), priceMaximumValidator(1000)]
      }),
      category: ['']
    });
  }

  createProduct() {
    this.productsService.addProduct(this.productForm!.value).subscribe(() => {
      this.router.navigate(['/products']);
    });
  }

  ngOnInit(): void {
    this.productForm.controls.category.valueChanges.subscribe(() => {
      this.productForm.controls.price.reset();
    });
  }
}
