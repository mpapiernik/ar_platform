import {NgModule} from '@angular/core';

import {routing} from './dashboard.routing';
import { SharedModule } from '@app/shared/shared.module';
import { AnalyticsComponent } from './analytics/analytics.component';
import { FlotChartModule } from '@app/shared/graphs/flot-chart/flot-chart.module';
import { D3Module } from '@app/shared/graphs/d3/d3.module';
import { LiveFeedsComponent } from './analytics/live-feeds/live-feeds.component';
import { LiveStatsComponent } from './analytics/live-feeds/live-stats.component';
import { RevenueComponent } from './analytics/live-feeds/revenue.component';
import { SocialNetworkComponent } from './analytics/live-feeds/social-network.component';

@NgModule({
  imports: [
    routing,
    SharedModule,
    FlotChartModule,
    D3Module,
  ],
  declarations: [
    AnalyticsComponent,
    LiveFeedsComponent,
    LiveStatsComponent,
    RevenueComponent,
    SocialNetworkComponent,
  ],
  providers: [],
})
export class DashboardModule {

}
