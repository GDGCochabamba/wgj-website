import { Component, OnInit, Input, Inject, ChangeDetectionStrategy } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import {AvatarDecoratorItem, AvatarOptions} from '../avatar-types';
import {buildAvatar} from '../avatar-utils';
import {getPreview} from '../avatar-selector-path';

@Component({
  selector: 'wgj-atribute-selector',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './atribute-selector.component.html',
  styleUrls: ['./atribute-selector.component.scss'],
})
export class AtributeSelectorComponent implements OnInit {
  @Input() avatar: AvatarOptions;
  @Input() decorator: AvatarDecoratorItem;
  @Input() dialogId: string;
  activeModal = false;
  modal: any;
  color: string;
  constructor(@Inject(DOCUMENT) private document) { }

  runChangeDetection(): boolean {
    console.log('Checking the view');
    return true;
  }

  openModal(): void {
    this.activeModal = true;
    const elems = this.document.querySelectorAll(`#${this.dialogId}`);
    const modal = M.Modal.getInstance(elems[0]);
    modal.open();
  }

  closeModal(): void {
    this.activeModal = false;
    const elems = this.document.querySelectorAll(`#${this.dialogId}`);
    const modal = M.Modal.getInstance(elems[0]);
    modal.close();
  }

  selectItem(item: string): void {
    this.decorator.currentValue = item;
  }

  getPreviewItem(value: string): string {
    let image = '';
    const {type} = this.decorator;
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
    const {type, options} = this.decorator;
    image = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="isolation:isolate" viewBox="0 0 20 20" version="1.1" shape-rendering="crispEdges">
    ${getPreview(type, options[0], this.color)}</svg>`;
    return image;
  }

  ngOnInit(): void {
    this.color = this.decorator.color;
  }
}
