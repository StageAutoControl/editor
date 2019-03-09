import {Component, OnInit} from '@angular/core';
import {Location} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DmxDeviceTypeService} from "../../../lib/api/dmx/dmx-device-type/dmx-device-type.service";
import {DmxDeviceService} from "../../../lib/api/dmx/dmx-device/dmx-device.service";
import {DmxDevice} from "../../../lib/api/dmx/dmx-device/dmx-device";
import {Observable} from "rxjs";
import {DmxDeviceType} from "../../../lib/api/dmx/dmx-device-type/dmx-device-type";

@Component({
  selector: 'app-dmx-device-details',
  templateUrl: './dmx-device-details.component.html',
  styleUrls: ['./dmx-device-details.component.less']
})
export class DmxDeviceDetailsComponent implements OnInit {
  form: FormGroup;
  dmxDeviceTypes$: Observable<DmxDeviceType[]>;
  tags$: Observable<string[]>;

  hasError = (controlName: string, errorName: string): boolean => {
    return this.form.controls[controlName].hasError(errorName);
  };

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private location: Location,
    private dmxDeviceService: DmxDeviceService,
    private dmxDeviceTypeService: DmxDeviceTypeService,
    private router: Router
  ) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.load(id);
    }

    this.setupForm();
    this.dmxDeviceTypes$ = this.dmxDeviceTypeService.entities$;
    this.tags$ = this.dmxDeviceService.tags$;
  }

  private setupForm() {
    this.form = this.formBuilder.group({
      id: this.formBuilder.control(""),
      name: this.formBuilder.control('', [Validators.required, Validators.minLength(3), Validators.maxLength(60)]),
      typeId: this.formBuilder.control('', [Validators.required]),
      universe: this.formBuilder.control(0, [Validators.required]),
      startChannel: this.formBuilder.control(0, [Validators.required]),
      tags: this.formBuilder.control([]),
    });
  }

  private load(id: string): void {
    this.dmxDeviceService
      .get(id)
      .subscribe((entity: DmxDevice) => {
        this.form.patchValue(entity);
      });
  }

  save() {
    let entity = this.form.value;
    console.log(entity);

    this.dmxDeviceService
      .save(entity)
      .subscribe(() => this.router.navigateByUrl("/dmx-devices"));
  }

  cancel() {
    this.location.back();
  }
}
