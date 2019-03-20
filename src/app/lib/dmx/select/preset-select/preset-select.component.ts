import {Component, Input} from '@angular/core';
import {Observable} from "rxjs";
import {DMXPreset} from "../../../api/dmx/dmx-preset/dmx-preset";
import {DMXPresetService} from "../../../api/dmx/dmx-preset/dmx-preset.service";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'dmx-preset-select',
  templateUrl: './preset-select.component.html',
  styleUrls: ['./preset-select.component.less']
})
export class PresetSelectComponent {
  presets$: Observable<DMXPreset[]>;

  @Input() allowEmpty: boolean = false;
  @Input() disabled: boolean = false;
  @Input() form: FormControl;

  constructor(
    private dmxPresetService: DMXPresetService
  ) {
    this.presets$ = dmxPresetService.entities$;
  }

}
