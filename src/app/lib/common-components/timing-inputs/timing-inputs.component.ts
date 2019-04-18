import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-timing-inputs',
  templateUrl: './timing-inputs.component.html',
  styleUrls: ['./timing-inputs.component.less']
})
export class TimingInputsComponent implements OnInit {
  @Input() form: FormGroup;

  constructor() {
  }

  hasError = (controlName: string, errorName: string): boolean => {
    return this.form.controls[controlName].hasError(errorName);
  };

  ngOnInit() {
  }

}
