import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { BannerComponent } from './banner/banner.component';
import { SharedModule } from '../shared/shared.module';
import { InvitationComponent } from './invitation/invitation.component';

@NgModule({
    declarations: [
        HomeComponent,
        BannerComponent,
        InvitationComponent,
    ],
    imports: [CommonModule, HomeRoutingModule, SharedModule],
    providers: []
})
export class HomeModule {}
