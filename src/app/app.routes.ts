import { Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { CheckoutComponent } from './components/checkout/checkout.component';

export const routes: Routes = [
    { path:'products', component:ProductsComponent },
    { path:'checkout', component:CheckoutComponent }
];
