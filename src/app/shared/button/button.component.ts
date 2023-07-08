import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'wgj-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() link = '';
}
