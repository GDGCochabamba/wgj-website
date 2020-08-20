import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { BannerComponent } from './banner/banner.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CommunitiesComponent } from './communities/communities.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { OurGoalComponent } from './our-goal/our-goal.component';
import { PreviousEventsComponent } from './previous-events/previous-events.component';
import { GlobalCommunityComponent } from './global-community/global-community.component';
import { AvatarGeneratorComponent } from './avatar-generator/avatar-generator.component';
import { AttributeSelectorComponent } from './avatar-generator/attribute-selector/attribute-selector.component';
import { SocialNetworksComponent } from './social-networks/social-networks.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    AboutUsComponent,
    CommunitiesComponent,
    SponsorsComponent,
    OurGoalComponent,
    PreviousEventsComponent,
    SocialNetworksComponent,
    AvatarGeneratorComponent,
    AttributeSelectorComponent,
    GlobalCommunityComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    FormsModule,
  ],
})
export class HomeModule { }
