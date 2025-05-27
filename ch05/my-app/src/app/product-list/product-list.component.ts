import { AfterViewInit, Component, OnInit, viewChild } from '@angular/core';
import { Product } from '../product';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { SortPipe } from '../sort.pipe';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-list',
  imports: [ProductDetailComponent, SortPipe],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})

export class ProductListComponent implements AfterViewInit, OnInit {
  private productService: ProductsService;

  constructor() {
    this.productService = new ProductsService();
  }

  productDetail = viewChild(ProductDetailComponent);

  products: Product[] = [];

  selectedProduct: Product | undefined = this.products[0];

  ngAfterViewInit(): void {
    console.log(this.productDetail()!.product());
  }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  onAdded(product: Product) {
    alert(`${product.title} added to the cart!`);
  }
}
