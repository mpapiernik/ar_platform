import {Routes, RouterModule} from '@angular/router';
import { AnalyticsComponent } from "./analytics/analytics.component";


export const routes: Routes = [
  {
    path: '',
    component: AnalyticsComponent
  }
];

export const routing = RouterModule.forChild(routes);
