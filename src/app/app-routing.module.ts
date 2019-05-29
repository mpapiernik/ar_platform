import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MainLayoutComponent } from "./shared/layout/app-layouts/main-layout.component";
import { AuthLayoutComponent } from "./shared/layout/app-layouts/auth-layout.component";

const routes: Routes = [
  {
    path: "",
    component: MainLayoutComponent,
    data: { pageTitle: "Dashboard" },
    children: [
      {
        path: "",
        redirectTo: "dashboard",
        pathMatch: "full"
      },

      {
        path: "app-views",
        loadChildren: "./features/app-views/app-views.module#AppViewsModule",
        data: { pageTitle: "App Views" }
      },

     
      {
        path: "dashboard",
        loadChildren: "./features/dashboard/dashboard.module#DashboardModule",
        data: { pageTitle: "Dashboard" }
      },

      {
        path: "e-commerce",
        loadChildren: "./features/e-commerce/e-commerce.module#ECommerceModule",
        data: { pageTitle: "E-commerce" }
      },


      {
        path: "miscellaneous",
        loadChildren:
          "./features/miscellaneous/miscellaneous.module#MiscellaneousModule",
        data: { pageTitle: "Miscellaneous" }
      },
      

      {
        path: "users",
        loadChildren: "./features/users/tables.module#TablesModule",
        data: { pageTitle: "Users" }
      }
    ]
  },

  {
    path: "auth",
    component: AuthLayoutComponent,
    loadChildren: "./features/auth/auth.module#AuthModule"
  },
  { path: "**", redirectTo: "miscellaneous/error404" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
