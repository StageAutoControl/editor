import {Component, OnInit, ViewChild} from '@angular/core';
import {Location} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DMXDeviceGroupService} from "../../../lib/api/dmx/dmx-device-group/dmx-device-group.service";
import {DMXDeviceGroup} from "../../../lib/api/dmx/dmx-device-group/dmx-device-group";
import {DMXDeviceService} from "../../../lib/api/dmx/dmx-device/dmx-device.service";
import {DeviceSelectorsFormComponent} from "../../../lib/dmx/device-selector/device-selectors-form/device-selectors-form.component";

@Component({
  selector: 'app-dmx-device-group-details',
  templateUrl: './dmx-device-group-details.component.html',
  styleUrls: ['./dmx-device-group-details.component.less']
})
export class DMXDeviceGroupDetailsComponent implements OnInit {
  form: FormGroup;

  @ViewChild('devices')
  devicesForm: DeviceSelectorsFormComponent;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private location: Location,
    private dmxDeviceService: DMXDeviceService,
    private dmxDeviceGroupService: DMXDeviceGroupService,
    private router: Router
  ) {
  }

  hasError = (controlName: string, errorName: string): boolean => {
    return this.form.controls[controlName].hasError(errorName);
  };

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.load(id);
    }

    this.setupForm();
  }

  save() {
    let entity = this.form.value;

    this.dmxDeviceGroupService
      .save(entity)
      .subscribe(() => this.router.navigateByUrl("/dmx-device-groups"));
  }

  cancel() {
    this.location.back();
  }

  private setupForm() {
    this.form = this.formBuilder.group({
      id: this.formBuilder.control(""),
      name: this.formBuilder.control('', [Validators.required, Validators.minLength(3), Validators.maxLength(60)]),
      devices: this.formBuilder.array([]),
    });
  }

  private load(id: string): void {
    this.dmxDeviceGroupService
      .get(id)
      .subscribe((entity: DMXDeviceGroup) => {
        Array.from(entity.devices)
          .forEach(() => this.devicesForm.addDeviceSelector());

        this.form.patchValue(entity);
      });
  }
}
