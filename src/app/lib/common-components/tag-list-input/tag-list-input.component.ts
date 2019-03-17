import {MatAutocomplete, MatAutocompleteSelectedEvent, MatChipInputEvent} from "@angular/material";
import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import {FormArray, FormControl} from "@angular/forms";
import {Observable} from "rxjs";
import {map, startWith, switchMap} from "rxjs/operators";

@Component({
  selector: 'app-tag-list-input',
  templateUrl: './tag-list-input.component.html',
  styleUrls: ['./tag-list-input.component.less'],
})
export class TagListInputComponent {
  separatorKeysCodes: number[] = [ENTER, COMMA];
  filteredTags: Observable<string[]>;
  inputControl = new FormControl();

  @Input('choices') choices$: Observable<string[]>;
  @Input() control: FormArray;

  @ViewChild('tagInput') tagInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') autocomplete: MatAutocomplete;

  constructor() {
    this.filteredTags = this.inputControl.valueChanges
      .pipe(
        startWith(null),
        switchMap((tag: string | null) => {
          return this.choices$.pipe(
            map((tags: string[]) => this._filter(tags, tag)),
          )
        })
      );
  }

  private initControl() {
    this.inputControl.setValue(null);
  }

  private _add(tag: string) {
    this.control.setValue(Array.from(this.control.value).concat(tag));
  }

  add(event: MatChipInputEvent): void {

    // Add tag only when MatAutocomplete is not open
    // To make sure this does not conflict with OptionSelected Event
    if (!this.autocomplete.isOpen) {
      const input = event.input;
      const value = event.value;

      if ((value || '').trim()) {
        this._add(value.trim());
      }

      if (input) {
        input.value = '';
      }

      this.initControl();
    }
  }

  remove(tag: string): void {
    this.control.setValue(Array.from(this.control.value).filter(t => t != tag));
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this._add(event.option.viewValue);
    this.tagInput.nativeElement.value = '';
    this.initControl();
  }

  private _filter(tags: string[], value: string): string[] {
    if (!value) {
      return tags;
    }

    const filterValue = value.toLowerCase();

    return tags.filter(tag => tag.toLowerCase().indexOf(filterValue) === 0);
  }
}
