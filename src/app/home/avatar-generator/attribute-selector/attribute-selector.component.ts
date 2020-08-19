import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

import { AvatarDecoratorItem, AvatarOptions } from '../avatar-types';
import { buildAvatar } from '../avatar-utils';
import { getPreview } from '../avatar-selector-path';

@Component({
  selector: 'wgj-attribute-selector',
  templateUrl: './attribute-selector.component.html',
  styleUrls: ['./attribute-selector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AttributeSelectorComponent implements OnInit {
  @Input() avatar: AvatarOptions;
  @Input() decorator: AvatarDecoratorItem;
  @Input() dialogId: string;
  color: string;

  ngOnInit(): void {
    this.color = this.decorator?.color;
  }

  selectItem(item: string): void {
    this.decorator.currentValue = item;
  }

  getPreviewItem(value: string): string {
    let image = '';
    const { type } = this.decorator;
    image = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="isolation:isolate" viewBox="0 0 20 20" version="1.1" shape-rendering="crispEdges">
    ${getPreview(type, value, this.color)}</svg>`;
    return image;
  }

  getAvatar(): string {
    this.avatar[this.dialogId] = this.decorator;
    this.decorator.color = this.color;
    return buildAvatar(this.avatar);
  }

  getIcon(): string {
    let image = '';
    if (this.decorator) {
      const { type, options } = this.decorator;
      image = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="isolation:isolate" viewBox="0 0 20 20" version="1.1" shape-rendering="crispEdges">
        ${getPreview(type, options[0], this.color)}</svg>`;
    }
    return image;
  }
}
