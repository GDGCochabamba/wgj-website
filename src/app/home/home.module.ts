import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BannerComponent } from './banner/banner.component';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [BannerComponent, HomeComponent],
  imports: [CommonModule],
  exports: [HomeComponent],
})
export class HomeModule {}
