import {Component, OnInit, ViewChild} from '@angular/core';
import {Location} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DMXTransitionService} from "../../../lib/api/dmx/dmx-transition/dmx-transition.service";
import {DMXTransition, EaseFunctionLinear, EaseFunctions} from "../../../lib/api/dmx/dmx-transition/dmx-transition";
import {TransitionParamsFormComponent} from "../../../lib/dmx/transition-params-form/transition-params-form.component";

@Component({
  selector: 'app-dmx-transition-details',
  templateUrl: './dmx-transition-details.component.html',
  styleUrls: ['./dmx-transition-details.component.less']
})
export class DMXTransitionDetailsComponent implements OnInit {
  readonly easeFunctions = EaseFunctions;
  form: FormGroup;
  loading = false;

  @ViewChild('paramsForm') paramsForm: TransitionParamsFormComponent;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private location: Location,
    private dmxTransitionService: DMXTransitionService,
    private router: Router
  ) {
    this.setupForm();
  }

  hasError = (controlName: string, errorName: string): boolean => {
    return this.form.controls[controlName].hasError(errorName);
  };

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loading = true;
      this.load(id);
    }
  }

  save() {
    this.dmxTransitionService
      .save(this.form.value)
      .subscribe(() => this.router.navigateByUrl("/dmx-transitions"));
  }

  cancel() {
    this.location.back();
  }

  private setupForm() {
    this.form = this.formBuilder.group({
      id: this.formBuilder.control(""),
      name: this.formBuilder.control('', [Validators.required, Validators.minLength(3), Validators.maxLength(60)]),
      ease: this.formBuilder.control(EaseFunctionLinear),
      length: this.formBuilder.control(0),
      params: this.formBuilder.array([]),
    });
  }

  private load(id: string): void {
    this.dmxTransitionService
      .get(id)
      .subscribe((entity: DMXTransition) => {
        Array.from(entity.params)
          .forEach(() => this.paramsForm.addParams());

        this.form.patchValue(entity);
        this.loading = false;
      });
  }
}
