import {Component, OnInit, ViewChild} from '@angular/core';
import {Location} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DMXSceneService} from "../../../lib/api/dmx/dmx-scene/dmx-scene.service";
import {DMXScene} from "../../../lib/api/dmx/dmx-scene/dmx-scene";
import {SubSceneListFormComponent} from "../../../lib/dmx/sub-scene-list-form/sub-scene-list-form.component";

@Component({
  selector: 'app-dmx-scene-details',
  templateUrl: './dmx-scene-details.component.html',
  styleUrls: ['./dmx-scene-details.component.less']
})
export class DMXSceneDetailsComponent implements OnInit {
  form: FormGroup;

  @ViewChild('subScenesListForm') subScenesListForm: SubSceneListFormComponent;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private location: Location,
    private dmxSceneService: DMXSceneService,
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
    this.dmxSceneService
      .save(this.form.value)
      .subscribe(() => this.router.navigateByUrl("/dmx-scenes"));
  }

  cancel() {
    this.location.back();
  }

  private setupForm() {
    this.form = this.formBuilder.group({
      id: this.formBuilder.control(''),
      name: this.formBuilder.control('', [Validators.required, Validators.minLength(3), Validators.maxLength(60)]),
      noteCount: this.formBuilder.control(4, [Validators.required]),
      noteValue: this.formBuilder.control(4, [Validators.required]),
      subScenes: this.formBuilder.array([]),
    });
  }

  // dear reader, please don't try to understand this. Sorry.
  private load(id: string): void {
    this.dmxSceneService
      .get(id)
      .subscribe((entity: DMXScene) => {
        Array.from(entity.subScenes || []).map(p => {
          p.deviceParams = Array.from(p.deviceParams || []).map(dp => {
            dp.params = Array.from(dp.params || []);
            return dp;
          });

          this.subScenesListForm.addSubScene(p.deviceParams.length, p.deviceParams.map(dp => dp.params ? dp.params.length : 0));

          return p;
        });

        setTimeout(() => this.form.patchValue(entity), 100);
      });
  }
}
