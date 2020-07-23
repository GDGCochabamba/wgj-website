import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParallaxDirective } from './directives/parallax/parallax.directive';
import { TransparentNavbarDirective } from './directives/transparent-navbar/transparent-navbar.directive';

@NgModule({
    declarations: [
        ParallaxDirective,
        TransparentNavbarDirective
    ],
    imports: [CommonModule],
    exports: [ParallaxDirective, TransparentNavbarDirective]
})
export class SharedModule {}
