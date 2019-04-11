import {AbstractControl} from "@angular/forms";

export class MutuallyExclusiveInputs {
  private controls: AbstractControl[];

  constructor(...controls: AbstractControl[]) {
    this.controls = controls;
    controls.forEach((c, i) => c.statusChanges.subscribe(() => this.setState(c, i)));
  }

  private setState(control: AbstractControl, index: number) {
    this.controls.forEach((c, i) => {
      if (i === index) {
        return;
      }

      if (!!control.value && c.enabled) {
        c.disable();
        return;
      }

      if (!control.value && c.disabled) {
        c.enable();
      }
    });
  }
}
