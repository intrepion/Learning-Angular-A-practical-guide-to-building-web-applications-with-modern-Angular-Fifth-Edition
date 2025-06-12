import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatInput, MatLabel } from '@angular/material/input';
import { CartService } from '../cart.service';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  imports: [
    MatFormField,
    MatInput,
    MatLabel,
    ReactiveFormsModule,
  ],
  selector: 'app-cart',
  styleUrl: './cart.component.css',
  templateUrl: './cart.component.html',
})
export class CartComponent implements OnInit {
  cartForm = new FormGroup({
  products: new FormArray<FormControl<number>>([])
  });
  products: Product[] = [];

  constructor(
    private cartService: CartService,
    private productsService: ProductsService
  ) {}

  private buildForm() {
    this.products.forEach(() => {
      this.cartForm.controls.products.push(
        new FormControl(1, { nonNullable: true })
      );
    });
  }

  private getProducts() {
    this.productsService.getProducts().subscribe(products => {
      this.cartService.cart?.products.forEach(item => {
        const product = products.find(p => p.id === item.productId);
        if (product) {
          this.products.push(product);
        }
      });
    });
  }

  ngOnInit(): void {
    this.getProducts();
    this.buildForm();
  }
}
