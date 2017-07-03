import { Component, Input, ViewChild, ElementRef, Inject } from '@angular/core';
import { JQ_TOKEN } from '../../providers/jQuery.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  constructor(@Inject(JQ_TOKEN) private $: any) { }

  @Input() title: string;
  @Input() elementId: string;
  @ViewChild('modalcontainer') containerElement: ElementRef;

  closeModal() {
    this.$(this.containerElement.nativeElement).modal('hide');
  }
}
