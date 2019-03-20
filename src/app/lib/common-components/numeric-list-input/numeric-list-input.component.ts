import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-numeric-list-input',
  templateUrl: './numeric-list-input.component.html',
  styleUrls: ['./numeric-list-input.component.less']
})
export class NumericListInputComponent implements OnInit, OnChanges {

  @Input() placeholder: string = '';
  @Input() form: FormControl;

  input = new FormControl('');

  ngOnChanges(changes: SimpleChanges): void {
    const sub = this.form.valueChanges.subscribe(() => {
      this.input.setValue(this.form.value, {emitEvent: false});
      sub.unsubscribe();
    });
  }

  ngOnInit() {
    this.input.valueChanges
      .subscribe((v: number[]) => {
        console.log("value", v, typeof v);

        if (!Array.isArray(v)) {
          v = (v as any)
            .split(',')
            .map(at => parseInt(at, 10));
        }

        this.form.setValue(v);
      });
  }
}
