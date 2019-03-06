import {Component, OnInit, ViewChild} from '@angular/core';
import {Location} from "@angular/common";
import {DmxDeviceTypeService} from "../dmx-device-type.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DmxDeviceType} from "../dmx-device-type";
import {LedListFormComponent} from "../../../lib/dmx/led-list-form/led-list-form.component";

// const enabledChannelDependencyValidator = (enabledFieldName: string, channelFieldName): ValidatorFn => (control: FormGroup): ValidationErrors | null => {
//   const enabled = control.get(enabledFieldName);
//   const channel = parseInt(control.get(channelFieldName).value, 10);
//
//   return enabled && channel < 0 ? {'channelNeedsToBeSetWhenEnabled': true} : null;
// };

@Component({
  selector: 'app-dmx-device-type-details',
  templateUrl: './dmx-device-type-details.component.html',
  styleUrls: ['./dmx-device-type-details.component.less']
})
export class DmxDeviceTypeDetailsComponent implements OnInit {
  form: FormGroup;

  @ViewChild('ledList')
  ledListForm: LedListFormComponent;

  hasError = (controlName: string, errorName: string): boolean => {
    return this.form.controls[controlName].hasError(errorName);
  };

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private location: Location,
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
  }

  private setupForm() {
    this.form = this.formBuilder.group({
      name: this.formBuilder.control('', [Validators.required, Validators.minLength(3), Validators.maxLength(60)]),
      channelCount: this.formBuilder.control(0, [Validators.required, Validators.min(1)]),
      channelsPerLED: this.formBuilder.control(0, [Validators.required]),
      strobeEnabled: this.formBuilder.control(false),
      strobeChannel: this.formBuilder.control(0, [Validators.required]),
      dimmerEnabled: this.formBuilder.control(false),
      dimmerChannel: this.formBuilder.control(0, [Validators.required]),
      modeEnabled: this.formBuilder.control(false),
      modeChannel: this.formBuilder.control(0, [Validators.required]),
      moving: this.formBuilder.control(false),
      tiltChannel: this.formBuilder.control(0, [Validators.required]),
      panChannel: this.formBuilder.control(0, [Validators.required]),
      id: this.formBuilder.control(""),
      leds: this.formBuilder.array([]),
    }, [
      // enabledChannelDependencyValidator('strobeEnabled', 'strobeChannel'),
      // enabledChannelDependencyValidator('dimmerEnabled', 'dimmerChannel'),
      // enabledChannelDependencyValidator('modeEnabled', 'modeChannel'),
      // enabledChannelDependencyValidator('moving', 'tiltChannel'),
      // enabledChannelDependencyValidator('moving', 'panChannel'),
    ]);

    this.form.controls['strobeEnabled'].valueChanges.subscribe(this.handleFeatureToggleChange(this.form.controls['strobeChannel']));
    this.form.controls['dimmerEnabled'].valueChanges.subscribe(this.handleFeatureToggleChange(this.form.controls['dimmerChannel']));
    this.form.controls['modeEnabled'].valueChanges.subscribe(this.handleFeatureToggleChange(this.form.controls['modeChannel']));
    this.form.controls['moving'].valueChanges.subscribe(this.handleFeatureToggleChange(this.form.controls['tiltChannel']));
    this.form.controls['moving'].valueChanges.subscribe(this.handleFeatureToggleChange(this.form.controls['panChannel']));
  }

  private handleFeatureToggleChange(channelControl: AbstractControl) {
    return (enabled: boolean) => {
      if (!enabled && channelControl.enabled) {
        channelControl.disable();
      } else if (enabled && !channelControl.enabled) {
        channelControl.enable();
      }
    }
  }

  private load(id: string): void {
    this.dmxDeviceTypeService
      .get(id)
      .subscribe((entity: DmxDeviceType) => {
        Array.from(entity.leds)
          .forEach(() => this.ledListForm.addLED());

        this.form.patchValue(entity);
      });
  }

  save() {
    let entity = this.form.value;
    console.log(entity);

    this.dmxDeviceTypeService
      .save(entity)
      .subscribe(() => this.router.navigateByUrl("/dmx-device-types"));
  }

  cancel() {
    this.location.back();
  }
}
