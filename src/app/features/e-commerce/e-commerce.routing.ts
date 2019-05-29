
import {ModuleWithProviders} from "@angular/core"
import {Routes, RouterModule} from "@angular/router";
import {OrdersComponent} from "./orders/orders.component";

export const routes:Routes = [
  {
    path: 'orders',
    component: OrdersComponent
  }
];

export const routing = RouterModule.forChild(routes)
