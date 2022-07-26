import {
  Directive,
  AfterViewInit,
  Output,
  EventEmitter,
  ElementRef,
} from '@angular/core';

import { Modal } from 'materialize-css';

@Directive({
  selector: '[wgjModal]',
  exportAs: 'modalDirective',
})
export class ModalDirective implements AfterViewInit {
  @Output() closeModal = new EventEmitter();
  private modal: Modal;

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit(): void {
    this.modal = Modal.init(this.elementRef.nativeElement, {
      onCloseEnd: () => {
        this.closeModal.emit();
      },
    });
  }

  open(): void {
    this.modal.open();
  }

  close(): void {
    this.modal.close();
  }
}
