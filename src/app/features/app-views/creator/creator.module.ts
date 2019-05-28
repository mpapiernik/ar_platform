import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatorRoutingModule } from './creator.routing';
import { CreatorComponent } from './creator.component';
import { SmartadminLayoutModule } from '@app/shared/layout';
import { SharedModule } from "@app/shared/shared.module";
import { DropzoneModule } from '@app/shared/forms/dropzone/dropzone.module';

@NgModule({
  imports: [
    CommonModule,
    CreatorRoutingModule,
    SmartadminLayoutModule,
    SharedModule,
    DropzoneModule
  ],
  declarations: [CreatorComponent]
})
export class CreatorModule { }
