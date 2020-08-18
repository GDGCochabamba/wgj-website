import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParallaxDirective } from './directives/parallax/parallax.directive';
import { TransparentNavbarDirective } from './directives/transparent-navbar/transparent-navbar.directive';
import { SafeHtmlPipe } from './pipes/safe-html/safe-html.pipe';

@NgModule({
  declarations: [
    ParallaxDirective,
    TransparentNavbarDirective,
    SafeHtmlPipe,
  ],
  imports: [CommonModule],
  exports: [
    ParallaxDirective,
    TransparentNavbarDirective,
    SafeHtmlPipe,
  ],
})
export class SharedModule { }
