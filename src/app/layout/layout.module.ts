import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SidenavDirective } from './navbar/sidenav.directive';

@NgModule({
    declarations: [NavbarComponent, FooterComponent, SidenavDirective],
    imports: [CommonModule],
    exports: [NavbarComponent, FooterComponent]
})
export class LayoutModule {}
