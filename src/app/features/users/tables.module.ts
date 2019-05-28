import {NgModule} from '@angular/core';
import {routing} from './tables.routing';
import { DatatablesUsersComponent } from './datatables-users.component';
import { DatatablesUsersRoutingModule } from './datatables-users-routing.module';
import { SharedModule } from '@app/shared/shared.module';
import { SmartadminDatatableModule } from '@app/shared/ui/datatable/smartadmin-datatable.module';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [DatatablesUsersComponent],
  imports: [    
    routing,
    CommonModule,
    SharedModule,
    SmartadminDatatableModule,
    DatatablesUsersRoutingModule
  ],
})
export class TablesModule {}
