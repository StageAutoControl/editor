import {Component, OnInit} from '@angular/core';
import {Location} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DMXDeviceTypeService} from "../../../lib/api/dmx/dmx-device-type/dmx-device-type.service";
import {DMXDeviceService} from "../../../lib/api/dmx/dmx-device/dmx-device.service";
import {DMXDevice} from "../../../lib/api/dmx/dmx-device/dmx-device";
import {Observable} from "rxjs";
import {DMXDeviceType} from "../../../lib/api/dmx/dmx-device-type/dmx-device-type";

@Component({
  selector: 'app-dmx-device-details',
  templateUrl: './dmx-device-details.component.html',
  styleUrls: ['./dmx-device-details.component.less']
})
export class DMXDeviceDetailsComponent implements OnInit {
  form: FormGroup;
  dmxDeviceTypes$: Observable<DMXDeviceType[]>;
  tags$: Observable<string[]>;

  hasError = (controlName: string, errorName: string): boolean => {
    return this.form.controls[controlName].hasError(errorName);
  };

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private location: Location,
    private dmxDeviceService: DMXDeviceService,
    private dmxDeviceTypeService: DMXDeviceTypeService,
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
      .subscribe((entity: DMXDevice) => {
        this.form.patchValue(entity);
      });
  }

  save() {
    this.dmxDeviceService
      .save(this.form.value)
      .subscribe(() => this.router.navigateByUrl("/dmx-devices"));
  }

  cancel() {
    this.location.back();
  }
}
