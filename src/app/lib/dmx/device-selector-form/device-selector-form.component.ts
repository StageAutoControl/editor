import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {Observable} from "rxjs";

@Component({
  selector: 'dmx-device-selector-form',
  templateUrl: './device-selector-form.component.html',
  styleUrls: ['./device-selector-form.component.less']
})
export class DeviceSelectorFormComponent implements OnInit {
  @Input('group') public form: FormGroup;
  @Input('choices') choices$: Observable<string[]>;

  ngOnInit(): void {
    const idCtrl = this.form.controls['id'];
    const tagsCtrl = this.form.controls['tags'];

    idCtrl.valueChanges.subscribe(value => {
      if (value && tagsCtrl.enabled) {
        tagsCtrl.disable();
      } else if (!value && tagsCtrl.disabled) {
        tagsCtrl.enable();
      }
    });

    tagsCtrl.valueChanges.subscribe(value => {
      if (value && idCtrl.enabled) {
        idCtrl.disable();
      } else if (!value && idCtrl.disabled) {
        idCtrl.enable();
      }
    });
  }
}
