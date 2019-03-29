import {Component, OnInit, ViewChild} from '@angular/core';
import {Location} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SongService} from "../../../lib/api/song/song.service";
import {Song} from "../../../lib/api/song/song";
import {SceneListFormComponent} from "../../../lib/dmx/scene-list-form/scene-list-form.component";
import {CommandListFormComponent} from "../../../lib/midi/command-list-form/command-list-form.component";
import {BarChangeListFormComponent} from "../../../lib/song/bar-change-list-form/bar-change-list-form.component";

@Component({
  selector: 'app-song-details',
  templateUrl: './song-details.component.html',
  styleUrls: ['./song-details.component.less']
})
export class SongDetailsComponent implements OnInit {
  form: FormGroup;

  @ViewChild('scenesForm') scenesForm: SceneListFormComponent;
  @ViewChild('barChangesForm') barChangesForm: BarChangeListFormComponent;
  @ViewChild('midiCommandsForm') midiCommandsForm: CommandListFormComponent;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private location: Location,
    private songService: SongService,
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
    this.songService
      .save(this.form.value)
      .subscribe(() => this.router.navigateByUrl("/songs"));
  }

  cancel() {
    this.location.back();
  }

  private setupForm() {
    this.form = this.formBuilder.group({
      id: this.formBuilder.control(""),
      name: this.formBuilder.control('', [Validators.required, Validators.minLength(3), Validators.maxLength(60)]),
      barChanges: this.formBuilder.array([]),
      dmxScenes: this.formBuilder.array([]),
      dmxDeviceParams: this.formBuilder.array([]),
      midiCommands: this.formBuilder.array([]),
    });
  }

  private load(id: string): void {
    this.songService
      .get(id)
      .subscribe((entity: Song) => {
        Array.from(entity.dmxScenes).forEach(() => this.scenesForm.addScene());
        Array.from(entity.barChanges).forEach(() => this.barChangesForm.addBarChange());
        Array.from(entity.midiCommands).forEach(() => this.midiCommandsForm.addCommand());

        this.form.patchValue(entity);
      });
  }
}
