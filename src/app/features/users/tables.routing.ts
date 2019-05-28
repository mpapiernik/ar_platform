import {RouterModule, Routes} from "@angular/router";
import { DatatablesUsersComponent } from "./datatables-users.component";


export const routes:Routes = [

  {
    path: '',
    component: DatatablesUsersComponent,
    data: {pageTitle: 'Datatables'}
  }

];


export const routing = RouterModule.forChild(routes)
