
import {ModuleWithProviders} from "@angular/core"
import {Routes, RouterModule} from "@angular/router";
import {OrdersComponent} from "./orders/orders.component";
import {ProductDetailsComponent} from "./product-details/product-details.component";

export const routes:Routes = [
  {
    path: 'orders',
    component: OrdersComponent
  },
  {
    path: 'product-details',
    component: ProductDetailsComponent
  }
];

export const routing = RouterModule.forChild(routes)
