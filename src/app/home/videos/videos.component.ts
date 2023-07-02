import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'wgj-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss'],
})
export class VideosComponent {
  videos = [
    {
      title: 'Women Game Jam 2020 Keynote',
      url: this.sanitizer.bypassSecurityTrustResourceUrl(
        'https://www.youtube.com/embed/spBRwNSl5_0',
      ),
    },
    {
      title: 'Meetup Press Start 2023',
      url: this.sanitizer.bypassSecurityTrustResourceUrl(
        'https://www.youtube.com/embed/eXTlzyO9lUY',
      ),
    },
  ];

  constructor(private sanitizer: DomSanitizer) {}
}
