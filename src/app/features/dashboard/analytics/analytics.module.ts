import {NgModule} from '@angular/core';

import {SharedModule} from '@app/shared/shared.module'

import {AnalyticsComponent} from './analytics.component';
import {SocialNetworkComponent} from "./live-feeds/social-network.component";
import {LiveFeedsComponent} from "./live-feeds/live-feeds.component";
import {LiveStatsComponent} from "./live-feeds/live-stats.component";
import {RevenueComponent} from "./live-feeds/revenue.component";
import {FlotChartModule} from "@app/shared/graphs/flot-chart/flot-chart.module";
import {D3Module} from "@app/shared/graphs/d3/d3.module";


@NgModule({
  imports: [
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
export class AnalyticsModule {

}
