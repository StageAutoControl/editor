import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {Observable} from "rxjs";
import {DMXColorVariable} from "../../api/dmx/dmx-color-variable/dmx-color-variable";
import {DMXColorVariableService} from "../../api/dmx/dmx-color-variable/dmx-color-variable.service";
import {MutuallyExcludiveInputs} from "../../common/MutuallyExcludiveInputs";

@Component({
  selector: 'dmx-params-form',
  templateUrl: './params-form.component.html',
  styleUrls: ['./params-form.component.less']
})
export class ParamsFormComponent implements OnChanges {
  @Input() public form: FormGroup;

  colorVars$: Observable<DMXColorVariable[]>;

  private watcher: MutuallyExcludiveInputs[] = [];

  constructor(private dmxColorVariableService: DMXColorVariableService) {
    this.colorVars$ = dmxColorVariableService.entities$;
  }

  hasError = (controlName: string, errorName: string): boolean => {
    return this.form.controls[controlName].hasError(errorName);
  };

  ngOnChanges(changes: SimpleChanges): void {
    this.watcher = [
      new MutuallyExcludiveInputs(this.form.controls.$color, this.form.controls.red),
      new MutuallyExcludiveInputs(this.form.controls.$color, this.form.controls.blue),
      new MutuallyExcludiveInputs(this.form.controls.$color, this.form.controls.green),
      new MutuallyExcludiveInputs(this.form.controls.$color, this.form.controls.white),
    ];
  }
}
