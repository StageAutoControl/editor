import {Component, OnInit} from '@angular/core';
import {Location} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DmxColorVariableService} from "../../../lib/api/dmx/dmx-color-variable/dmx-color-variable.service";
import {DmxColorVariable} from "../../../lib/api/dmx/dmx-color-variable/dmx-color-variable";

@Component({
  selector: 'app-dmx-color-variable-details',
  templateUrl: './dmx-color-variable-details.component.html',
  styleUrls: ['./dmx-color-variable-details.component.less']
})
export class DmxColorVariableDetailsComponent implements OnInit {
  form: FormGroup;

  hasError = (controlName: string, errorName: string): boolean => {
    return this.form.controls[controlName].hasError(errorName);
  };

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private location: Location,
    private dmxColorVariableService: DmxColorVariableService,
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
      dimmerChannel: this.formBuilder.control(0, [Validators.required]),
      red: this.formBuilder.control(0),
      green: this.formBuilder.control(0),
      blue: this.formBuilder.control(0),
      white: this.formBuilder.control(0),
    });
  }

  private load(id: string): void {
    this.dmxColorVariableService
      .get(id)
      .subscribe((entity: DmxColorVariable) => {
        this.form.patchValue(entity);
      });
  }

  save() {
    this.dmxColorVariableService
      .save(this.form.value)
      .subscribe(() => this.router.navigateByUrl("/dmx-color-variables"));
  }

  cancel() {
    this.location.back();
  }
}
