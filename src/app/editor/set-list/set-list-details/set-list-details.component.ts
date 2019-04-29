import {Component, OnInit, ViewChild} from '@angular/core';
import {Location} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SetListService} from "../../../lib/api/set-list/set-list.service";
import {SetList} from "../../../lib/api/set-list/set-list";
import {SongListFormComponent} from "../../../lib/dmx/song-list-form/song-list-form.component";

@Component({
  selector: 'app-set-list-details',
  templateUrl: './set-list-details.component.html',
  styleUrls: ['./set-list-details.component.less']
})
export class SetListDetailsComponent implements OnInit {
  form: FormGroup;

  @ViewChild('songsForm') songsForm: SongListFormComponent;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private location: Location,
    private setListService: SetListService,
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
    this.setListService
      .save(this.form.value)
      .subscribe(() => this.router.navigateByUrl("/set-lists"));
  }

  cancel() {
    this.location.back();
  }

  private setupForm() {
    this.form = this.formBuilder.group({
      id: this.formBuilder.control(""),
      name: this.formBuilder.control('', [Validators.required, Validators.minLength(3)]),
      songs: this.formBuilder.array([]),
    });
  }

  private load(id: string): void {
    this.setListService
      .get(id)
      .subscribe((entity: SetList) => {
        Array.from(entity.songs).forEach(() => this.songsForm.addSong());

        this.form.patchValue(entity);
      });
  }
}
