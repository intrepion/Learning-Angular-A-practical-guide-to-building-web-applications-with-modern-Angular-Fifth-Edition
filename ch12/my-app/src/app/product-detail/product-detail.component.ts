import { CommonModule, CurrencyPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  input,
  OnDestroy,
  OnInit,
  output,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatChip, MatChipSet } from '@angular/material/chips';
import { MatIcon } from '@angular/material/icon';
import { MatError, MatFormField, MatInput, MatSuffix } from '@angular/material/input';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { AuthService } from '../auth.service';
import { CartService } from '../cart.service';
import { Product } from '../product';
import { ProductsService } from '../products.service';
import { PriceMaximumDirective } from '../price-maximum.directive';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    CurrencyPipe,
    FormsModule,
    MatButton,
    MatChip,
    MatChipSet,
    MatError,
    MatFormField,
    MatIcon,
    MatIconButton,
    MatInput,
    MatSnackBarModule,
    MatSuffix,
    PriceMaximumDirective,
  ],
  providers: [
    { provide: ProductsService, useClass: ProductsService },
  ],
  selector: 'app-product-detail',
  styleUrl: './product-detail.component.css',
  templateUrl: './product-detail.component.html',
})

export class ProductDetailComponent implements OnDestroy, OnInit {
  added = output<Product>();
  
  deleted = output();

  id = input<string>();

  price: number | undefined;

  product$: Observable<Product> | undefined;

  constructor(
    public authService: AuthService,
    private cartService: CartService,
    private productService: ProductsService,
    private route: ActivatedRoute,
    private router: Router,
    private snackbar: MatSnackBar,
  ) { }

  addToCart(id: number) {
    this.cartService.addProduct(id).subscribe(() => {
      this.snackbar.open('Product added to cart!', undefined, {
        duration: 1000
      });
    });
  }

  changePrice(product: Product) {
    this.productService.updateProduct(
      product.id,
      this.price!
    ).subscribe(() => this.router.navigate(['/products']));
  }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
    this.product$ = this.route.paramMap.pipe(
      switchMap(params => {
        return this.productService.getProduct(Number(params.get('id')));
      })
    );
  }

  remove(product: Product) {
    this.productService.deleteProduct(product.id).subscribe(() => {
      this.router.navigate(['/products']);
    });
  }
}
