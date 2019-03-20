import {Component, OnInit, ViewChild} from '@angular/core';
import {Location} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DMXAnimationService} from "../../../lib/api/dmx/dmx-animation/dmx-animation.service";
import {DMXAnimation} from "../../../lib/api/dmx/dmx-animation/dmx-animation";
import {AnimationFramesFormComponent} from "../../../lib/dmx/animation-frames-form/animation-frames-form.component";

@Component({
  selector: 'app-dmx-animation-details',
  templateUrl: './dmx-animation-details.component.html',
  styleUrls: ['./dmx-animation-details.component.less']
})
export class DMXAnimationDetailsComponent implements OnInit {
  form: FormGroup;
  loading = false;

  @ViewChild('framesForm') framesForm: AnimationFramesFormComponent;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private location: Location,
    private dmxAnimationService: DMXAnimationService,
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
    this.dmxAnimationService
      .save(this.form.value)
      .subscribe(() => this.router.navigateByUrl("/dmx-animations"));
  }

  cancel() {
    this.location.back();
  }

  private setupForm() {
    this.form = this.formBuilder.group({
      id: this.formBuilder.control(""),
      name: this.formBuilder.control('', [Validators.required, Validators.minLength(3), Validators.maxLength(60)]),
      frames: this.formBuilder.array([]),
    });
  }

  private load(id: string): void {
    this.dmxAnimationService
      .get(id)
      .subscribe((entity: DMXAnimation) => {
        Array.from(entity.frames)
          .forEach(() => this.framesForm.addFrame());

        this.form.patchValue(entity);
        this.loading = false;
      });
  }
}
