import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DatatablesUsersComponent} from "./datatables-users.component";

const routes: Routes = [{
  path: '',
  component: DatatablesUsersComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatatablesUsersRoutingModule { }
