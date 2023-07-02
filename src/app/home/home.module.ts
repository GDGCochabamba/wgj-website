import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BannerComponent } from './banner/banner.component';
import { HomeComponent } from './home.component';
import { CommunitiesComponent } from './communities/communities.component';
import { InfoComponent } from './info/info.component';
import { SectionTitleComponent } from '../shared/section-title/section-title.component';
import { CallToActionComponent } from '../shared/call-to-action/call-to-action.component';
import { FaqComponent } from './faq/faq.component';
import { VideosComponent } from './videos/videos.component';

@NgModule({
  declarations: [
    BannerComponent,
    HomeComponent,
    CommunitiesComponent,
    InfoComponent,
    FaqComponent,
    VideosComponent,
  ],
  imports: [CommonModule, SectionTitleComponent, CallToActionComponent],
  exports: [HomeComponent],
})
export class HomeModule {}
