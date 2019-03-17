import {Component, OnInit} from '@angular/core';
import {Location} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DMXPresetService} from "../../../lib/api/dmx/dmx-preset/dmx-preset.service";
import {DMXPreset} from "../../../lib/api/dmx/dmx-preset/dmx-preset";

@Component({
  selector: 'app-dmx-preset-details',
  templateUrl: './dmx-preset-details.component.html',
  styleUrls: ['./dmx-preset-details.component.less']
})
export class DMXPresetDetailsComponent implements OnInit {
  form: FormGroup;

  hasError = (controlName: string, errorName: string): boolean => {
    return this.form.controls[controlName].hasError(errorName);
  };

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private location: Location,
    private dmxPresetService: DMXPresetService,
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
      id: this.formBuilder.control(""),
      name: this.formBuilder.control('', [Validators.required, Validators.minLength(3), Validators.maxLength(60)]),
      typeId: this.formBuilder.control('', [Validators.required]),
      universe: this.formBuilder.control(0, [Validators.required]),
      startChannel: this.formBuilder.control(0, [Validators.required]),
      tags: this.formBuilder.control([]),
    });
  }

  private load(id: string): void {
    this.dmxPresetService
      .get(id)
      .subscribe((entity: DMXPreset) => {
        this.form.patchValue(entity);
      });
  }

  save() {
    this.dmxPresetService
      .save(this.form.value)
      .subscribe(() => this.router.navigateByUrl("/dmx-presets"));
  }

  cancel() {
    this.location.back();
  }
}
