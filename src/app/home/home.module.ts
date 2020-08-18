import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { BannerComponent } from './banner/banner.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CommunitiesComponent } from './communities/communities.component';
import { OurGoalComponent } from './our-goal/our-goal.component';
import { PreviousEventsComponent } from './previous-events/previous-events.component';
import { SocialNetworksComponent } from './social-networks/social-networks.component';
import { SharedModule } from '../shared/shared.module';
import { AvatarGeneratorComponent } from './avatar-generator/avatar-generator.component';
import { AtributeSelectorComponent } from './avatar-generator/selector/atribute-selector.component';
import { SafeHtmlPipe } from '../shared/safe-html.pipe.ts';
@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    AboutUsComponent,
    CommunitiesComponent,
    OurGoalComponent,
    PreviousEventsComponent,
    SocialNetworksComponent,
    AvatarGeneratorComponent,
    AtributeSelectorComponent,
    SafeHtmlPipe,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    FormsModule,
  ],
})
export class HomeModule { }
