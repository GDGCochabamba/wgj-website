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
import { TrainerPostulationComponent } from './trainer-postulation/trainer-postulation.component';
import { ButtonComponent } from '../shared/button/button.component';
import { SponsorRegistrationComponent } from './sponsor-registration/sponsor-registration.component';
import { AvatarGeneratorComponent } from './avatar-generator/avatar-generator.component';
import { AttributeSelectorComponent } from './avatar-generator/attribute-selector/attribute-selector.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SanitizeHtmlPipe } from './sanitizeHtml.pipe';
import { FriendlyCommunitiesComponent } from './friendly-communities/friendly-communities.component';

@NgModule({
  declarations: [
    BannerComponent,
    HomeComponent,
    CommunitiesComponent,
    InfoComponent,
    FaqComponent,
    FriendlyCommunitiesComponent,
    VideosComponent,
    TrainerPostulationComponent,
    SponsorRegistrationComponent,
    AvatarGeneratorComponent,
    AttributeSelectorComponent,
    SanitizeHtmlPipe,
  ],
  imports: [
    CommonModule,
    SectionTitleComponent,
    CallToActionComponent,
    ButtonComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [HomeComponent],
})
export class HomeModule {}
