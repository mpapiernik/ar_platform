import {NgModule} from '@angular/core';
import {routing} from './tables.routing';
import { DatatablesCaseComponent } from './datatables-case/datatables-case.component';
import { DatatablesCaseRoutingModule } from './datatables-case/datatables-case-routing.module';
import { SharedModule } from '@app/shared/shared.module';
import { SmartadminDatatableModule } from '@app/shared/ui/datatable/smartadmin-datatable.module';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [DatatablesCaseComponent],
  imports: [    
    routing,
    CommonModule,
    SharedModule,
    SmartadminDatatableModule,
    DatatablesCaseRoutingModule
  ],
})
export class TablesModule {}
