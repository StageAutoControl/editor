import {Component, OnInit, ViewChild} from '@angular/core';
import {Location} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DMXPresetService} from "../../../lib/api/dmx/dmx-preset/dmx-preset.service";
import {DMXPreset} from "../../../lib/api/dmx/dmx-preset/dmx-preset";
import {DeviceParamsListFormComponent} from "../../../lib/dmx/device-params/device-params-list-form/device-params-list-form.component";

@Component({
  selector: 'app-dmx-preset-details',
  templateUrl: './dmx-preset-details.component.html',
  styleUrls: ['./dmx-preset-details.component.less']
})
export class DMXPresetDetailsComponent implements OnInit {
  form: FormGroup;

  @ViewChild('deviceParamsListForm') deviceParamsListForm: DeviceParamsListFormComponent;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private location: Location,
    private dmxPresetService: DMXPresetService,
    private router: Router,
  ) {

  }

  hasError = (controlName: string, errorName: string): boolean => {
    return this.form.controls[controlName].hasError(errorName);
  };

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.load(id);
    }

    this.setupForm();
  }

  save() {
    this.dmxPresetService
      .save(this.form.value)
      .subscribe(() => this.router.navigateByUrl("/dmx-presets"));
  }

  cancel() {
    this.location.back();
  }

  private setupForm() {
    this.form = this.formBuilder.group({
      id: this.formBuilder.control(''),
      name: this.formBuilder.control('', [Validators.required, Validators.minLength(3), Validators.maxLength(60)]),
      deviceParams: this.formBuilder.array([]),
    });
  }

  // dear reader, please don't try to understand this. Sorry.
  private load(id: string): void {
    this.dmxPresetService
      .get(id)
      .subscribe((entity: DMXPreset) => {
        Array.from(entity.deviceParams).forEach(p => {
          this.deviceParamsListForm.addDeviceParams(Array.from(p.params).length);
        });

        setTimeout(() => this.form.patchValue(entity), 100);
      });
  }
}
