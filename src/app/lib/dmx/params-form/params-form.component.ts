import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {Observable} from "rxjs";
import {DMXColorVariable} from "../../api/dmx/dmx-color-variable/dmx-color-variable";
import {DMXColorVariableService} from "../../api/dmx/dmx-color-variable/dmx-color-variable.service";
import {MutuallyExclusiveInputs} from "../../common/MutuallyExclusiveInputs";
import {handleFeatureToggleChange} from "../../common/feature-toggle";

@Component({
  selector: 'dmx-params-form',
  templateUrl: './params-form.component.html',
  styleUrls: ['./params-form.component.less']
})
export class ParamsFormComponent implements OnChanges {
  @Input() public form: FormGroup;

  colorVars$: Observable<DMXColorVariable[]>;

  private watcher: MutuallyExclusiveInputs[] = [];

  constructor(private dmxColorVariableService: DMXColorVariableService) {
    this.colorVars$ = dmxColorVariableService.entities$;
  }

  hasError = (controlName: string, errorName: string): boolean => {
    return this.form.controls[controlName].hasError(errorName);
  };

  ngOnChanges(changes: SimpleChanges): void {
    this.watcher = [
      new MutuallyExclusiveInputs(this.form.controls.$color, this.form.controls.red),
      new MutuallyExclusiveInputs(this.form.controls.$color, this.form.controls.blue),
      new MutuallyExclusiveInputs(this.form.controls.$color, this.form.controls.green),
      new MutuallyExclusiveInputs(this.form.controls.$color, this.form.controls.white),
    ];

    this.form.controls['ledAll'].valueChanges.subscribe(handleFeatureToggleChange(this.form.controls['led'], true));
  }
}
