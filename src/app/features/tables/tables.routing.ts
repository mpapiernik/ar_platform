import {RouterModule, Routes} from "@angular/router";
import { DatatablesCaseComponent } from "./datatables-case/datatables-case.component";


export const routes:Routes = [

  {
    path: '',
    component: DatatablesCaseComponent,
    data: {pageTitle: 'Datatables'}
  }

];


export const routing = RouterModule.forChild(routes)
