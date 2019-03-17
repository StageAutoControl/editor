import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-reactive-dmx-input',
  templateUrl: './reactive-dmx-input.component.html',
  styleUrls: ['./reactive-dmx-input.component.less']
})
export class ReactiveDmxInputComponent {
  @Input() value: number = 0;
  @Input() placeholder: string = '';
  @Input() disabled: boolean = false;

  @Output() valueChange: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
  }

  emitChange(value: string) {
    this.valueChange.emit(parseInt(value, 10));
  }
}
