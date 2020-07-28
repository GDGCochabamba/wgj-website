import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { BannerComponent } from './banner/banner.component';
import { InvitationComponent } from './invitation/invitation.component';
import { EventsComponent } from './events/events.component';
import { SocialNetworksComponent } from './social-networks/social-networks.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    InvitationComponent,
    EventsComponent,
    SocialNetworksComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
  ],
})
export class HomeModule { }
