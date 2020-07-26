import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { BannerComponent } from './banner/banner.component';
import { SharedModule } from '../shared/shared.module';
import { InvitationComponent } from './invitation/invitation.component';
import { SocialNetworksComponent } from './social-networks/social-networks.component';

@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    InvitationComponent,
    SocialNetworksComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
  providers: []
})
export class HomeModule {}
