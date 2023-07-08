import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'wgj-section-title',
  templateUrl: './section-title.component.html',
  styleUrls: ['./section-title.component.scss'],
  imports: [CommonModule]
})
export class SectionTitleComponent {
  @Input() isOrange = false;
}
