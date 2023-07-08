import { Component } from '@angular/core';

import { ButtonComponent } from '../button/button.component';

@Component({
  standalone: true,
  imports: [ButtonComponent],
  selector: 'wgj-call-to-action',
  templateUrl: './call-to-action.component.html',
})
export class CallToActionComponent {}
