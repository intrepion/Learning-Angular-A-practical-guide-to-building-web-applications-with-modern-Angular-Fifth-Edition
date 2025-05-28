import { CommonModule } from '@angular/common';
import { Component, Host, OnInit, Optional } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products.service';
import { FavoritesService } from '../favorites.service';

@Component({
  selector: 'app-favorites',
  imports: [CommonModule],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css',
  providers: [
    { provide: ProductsService, useClass: FavoritesService },
  ],
})

export class FavoritesComponent implements OnInit {
  products: Product[] = [];

  constructor(@Optional() @Host() private productService: ProductsService) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }
}
