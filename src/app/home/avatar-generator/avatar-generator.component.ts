import {
  Component,
  ViewChild,
  ElementRef,
  ChangeDetectionStrategy,
} from '@angular/core';

import { toPng } from 'html-to-image';

import { avatarOptions, buildAvatar } from './avatar-utils';
import { AvatarDecoratorItem, AvatarOptions } from './avatar-types';

@Component({
  selector: 'wgj-avatar-generator',
  templateUrl: './avatar-generator.component.html',
  styleUrls: ['./avatar-generator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarGeneratorComponent {
  @ViewChild('screen') screen!: ElementRef;
  @ViewChild('canvas') canvas!: ElementRef;
  @ViewChild('downloadLink') downloadLink!: ElementRef;
  avatar = avatarOptions;
  bgImages = ['fondo1.png', 'fondo2.png', 'fondo3.png', 'fondo4.png'];
  bgImage = this.bgImages[0];
  avatarKeys = Object.keys(avatarOptions);

  downloadImage(): void {
    toPng(this.screen.nativeElement)
      .then((dataUrl) => {
        this.canvas.nativeElement.src = dataUrl;
        this.downloadLink.nativeElement.href = dataUrl;
        this.downloadLink.nativeElement.download = 'wgj-bolivia-avatar.png';
        this.downloadLink.nativeElement.click();
      })
      .catch((error) => console.error('oops, something went wrong!', error));
  }

  previousBgImage(): void {
    const index = this.bgImages.indexOf(this.bgImage);
    this.bgImage = this.bgImages[index - 1] || this.bgImages[this.bgImages.length - 1];
  }

  nextBgImage(): void {
    const index = this.bgImages.indexOf(this.bgImage);
    this.bgImage = this.bgImages[index + 1] || this.bgImages[0];
  }

  getAvatarDecoratorItem(key: string): AvatarDecoratorItem {
    return this.avatar[key as keyof AvatarOptions];
  }

  buildAvatarSvg(): string {
    return buildAvatar(this.avatar);
  }
}
