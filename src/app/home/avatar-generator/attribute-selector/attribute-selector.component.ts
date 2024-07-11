import { DOCUMENT } from '@angular/common';
import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';

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
  @Input() avatar!: AvatarOptions;
  @Input() decorator!: AvatarDecoratorItem;
  @Input() dialogId!: string;

  color!: string;
  hasColor!: boolean;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {
    this.color = this.decorator?.color!;
    this.hasColor = this.decorator && 'color' in this.decorator;
  }

  openDialog(): void {
    const dialog = this.document.getElementById(
      `dialog-default-${this.decorator.name}`,
    ) as any;
    dialog?.showModal();
  }

  closeDialog(): void {
    const dialog = this.document.getElementById(
      `dialog-default-${this.decorator.name}`,
    ) as any;
    dialog?.close();
  }

  selectItem(item: string): void {
    this.decorator.currentValue = item;
  }

  getPreviewItem(value: string): string {
    let image = '';
    if (this.decorator) {
      const { type } = this.decorator;
      image = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 762 762" fill="none" shape-rendering="auto"><metadata xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/"><rdf:rdf><rdf:description><dc:title>Adventurer</dc:title><dc:creator>Lisa Wischofsky</dc:creator><dc:source xsi:type="dcterms:URI">https://www.figma.com/community/file/1184595184137881796</dc:source><dcterms:license xsi:type="dcterms:URI">https://creativecommons.org/licenses/by/4.0/</dcterms:license><dc:rights>Remix of „Adventurer” (https://www.figma.com/community/file/1184595184137881796) by „Lisa Wischofsky”, licensed under „CC BY 4.0” (https://creativecommons.org/licenses/by/4.0/)</dc:rights></rdf:description></rdf:rdf></metadata><mask id="viewboxMask"><rect width="762" height="762" rx="0" ry="0" x="0" y="0" fill="#fff"></rect></mask>
        ${getPreview(type, value, this.color)}
      </svg>`;
    }
    return image;
  }

  getAvatar(): string {
    this.avatar[this.dialogId as keyof AvatarOptions] = this.decorator;
    this.decorator.color = this.color;
    return buildAvatar(this.avatar);
  }

  getIcon(): string {
    let image = '';
    if (this.decorator) {
      const { type, options } = this.decorator;
      image = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 762 762" fill="none" shape-rendering="auto"><metadata xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/"><rdf:rdf><rdf:description><dc:title>Adventurer</dc:title><dc:creator>Lisa Wischofsky</dc:creator><dc:source xsi:type="dcterms:URI">https://www.figma.com/community/file/1184595184137881796</dc:source><dcterms:license xsi:type="dcterms:URI">https://creativecommons.org/licenses/by/4.0/</dcterms:license><dc:rights>Remix of „Adventurer” (https://www.figma.com/community/file/1184595184137881796) by „Lisa Wischofsky”, licensed under „CC BY 4.0” (https://creativecommons.org/licenses/by/4.0/)</dc:rights></rdf:description></rdf:rdf></metadata><mask id="viewboxMask"><rect width="762" height="762" rx="0" ry="0" x="0" y="0" fill="#fff"></rect></mask>
      ${getPreview(type, options[0], this.color)}
      </svg>`;
    }
    return image;
  }
}
