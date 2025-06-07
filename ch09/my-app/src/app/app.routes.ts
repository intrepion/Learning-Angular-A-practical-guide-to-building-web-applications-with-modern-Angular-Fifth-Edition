import { Routes } from '@angular/router';
import { authGuard } from './auth.guard';
import { CartComponent } from './cart/cart.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { checkoutGuard } from './checkout.guard';
import { productsResolver } from './products.resolver';

export const routes: Routes = [
  {
    path: 'user',
    loadChildren: () => import('./user.routes'),
  },
  {
    component: ProductCreateComponent,
    path: 'products/new',
  },
  {
    component: ProductDetailComponent,
    path: 'products/:id',
  },
  {
    component: ProductListComponent,
    path: 'products',
    resolve: {
      products: productsResolver,
    },
  },
  {
    canActivate: [authGuard],
    canDeactivate: [checkoutGuard],
    component: CartComponent,
    path: 'cart',
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'products',
  },
  {
    path: '**',
    redirectTo: 'products',
  },
];
