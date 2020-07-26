import { Component, OnInit, ViewChild, ElementRef, ChangeDetectionStrategy } from '@angular/core';
import htmlToImage from 'html-to-image';
import {avatarOptions, buildAvatar} from './avatar-utils';

@Component({
  selector: 'wgj-avatar-generator',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './avatar-generator.component.html',
  styleUrls: ['./avatar-generator.component.scss'],
})
export class AvatarGeneratorComponent implements OnInit {
  avatar = avatarOptions;
  avatarKeys = Object.keys(avatarOptions);
  constructor() { }
  @ViewChild('screen') screen: ElementRef;
  @ViewChild('canvas') canvas: ElementRef;
  @ViewChild('downloadLink') downloadLink: ElementRef;

  downloadImage(): void {
    htmlToImage.toPng(this.screen.nativeElement)
      .then((dataUrl) => {
        this.canvas.nativeElement.src = dataUrl;
        this.downloadLink.nativeElement.href = dataUrl;
        this.downloadLink.nativeElement.download = 'wgj-bolivia-avatar.png';
        this.downloadLink.nativeElement.click();
      })
      .catch((error) => {
        console.error('oops, something went wrong!', error);
      });
  }

  ngOnInit(): void {
    setTimeout(() => {
      const elems = document.querySelectorAll('.modal');
      const instances = M.Modal.init(elems, {});
    }, 0); // please replace this one when component end first render, i just send to event loop xD
  }

  buildAvatarSvg(): string {
    return buildAvatar(this.avatar);
  }

}
