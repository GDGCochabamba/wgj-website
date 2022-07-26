import {
  Component,
  ViewChild,
  ElementRef,
  ChangeDetectionStrategy,
} from '@angular/core';

import htmlToImage from 'html-to-image';

import { avatarOptions, buildAvatar } from './avatar-utils';

@Component({
  selector: 'wgj-avatar-generator',
  templateUrl: './avatar-generator.component.html',
  styleUrls: ['./avatar-generator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarGeneratorComponent {
  @ViewChild('screen') screen: ElementRef;
  @ViewChild('canvas') canvas: ElementRef;
  @ViewChild('downloadLink') downloadLink: ElementRef;
  avatar = avatarOptions;
  avatarKeys = Object.keys(avatarOptions);

  downloadImage(): void {
    htmlToImage
      .toPng(this.screen.nativeElement)
      .then((dataUrl) => {
        this.canvas.nativeElement.src = dataUrl;
        this.downloadLink.nativeElement.href = dataUrl;
        this.downloadLink.nativeElement.download = 'wgj-bolivia-avatar.png';
        this.downloadLink.nativeElement.click();
      })
      .catch((error) => console.error('oops, something went wrong!', error));
  }

  buildAvatarSvg(): string {
    return buildAvatar(this.avatar);
  }
}
