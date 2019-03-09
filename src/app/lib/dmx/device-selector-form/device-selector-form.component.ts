import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {Observable} from "rxjs";
import {DmxDevice} from "../../api/dmx/dmx-device/dmx-device";

@Component({
  selector: 'dmx-device-selector-form',
  templateUrl: './device-selector-form.component.html',
  styleUrls: ['./device-selector-form.component.less']
})
export class DeviceSelectorFormComponent implements OnInit {
  @Input('form') public form: FormGroup;
  @Input('tags') tags$: Observable<string[]>;
  @Input('devices') devices$: Observable<DmxDevice[]>;

  ngOnInit(): void {
    const idCtrl = this.form.controls['id'];
    const tagsCtrl = this.form.controls['tags'];

    idCtrl.valueChanges.subscribe(() => this.checkFields('id'));
    tagsCtrl.valueChanges.subscribe(() => this.checkFields('tags'));

    this.checkFields('init');
  }

  private checkFields(source: string) {
    const idCtrl = this.form.controls['id'];
    const tagsCtrl = this.form.controls['tags'];

    if (idCtrl.value && tagsCtrl.enabled) {
      tagsCtrl.disable({emitEvent: false});
    } else if (!idCtrl.value && tagsCtrl.disabled) {
      tagsCtrl.enable({emitEvent: false});
    }

    const tags = Array.from(tagsCtrl.value || []);
    if (tags.length > 0 && idCtrl.enabled) {
      idCtrl.disable();
    } else if (tags.length == 0 && idCtrl.disabled) {
      idCtrl.enable();
    }

    console.log(`source=${source} id: enabled=${idCtrl.enabled} value='${idCtrl.value}' ; tags: enabled=${tagsCtrl.enabled} value='${JSON.stringify(tags)}'`);
  }

}
