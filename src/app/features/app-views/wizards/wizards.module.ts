import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { wizardsRouting } from './wizards.routing';
import {WizardsComponent} from "./wizards.component";

import {BasicWizardWidgetComponent} from "./basic-wizard-widget/basic-wizard-widget.component";
import { SharedModule } from '@app/shared/shared.module';
import { SmartadminWizardsModule } from '@app/shared/forms/wizards/smartadmin-wizards.module';
import { BasicComponent } from './basic/basic.component';
import { LayoutComponent } from './layout/layout.component';
import { DesignerComponent } from './designer/designer.component';
import { VersionsComponent } from './versions/versions.component';
import { PublishComponent } from './publish/publish.component';
import { ColorPickerModule } from 'ngx-color-picker';


@NgModule({
  imports: [
    CommonModule,
    wizardsRouting,
    SharedModule,
    SmartadminWizardsModule,
    ColorPickerModule
  ],
  declarations: [WizardsComponent, BasicWizardWidgetComponent, BasicComponent, LayoutComponent, DesignerComponent, VersionsComponent, PublishComponent]
})
export class WizardsModule { }
