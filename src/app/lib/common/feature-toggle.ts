import {AbstractControl} from "@angular/forms";

export const handleFeatureToggleChange = (slave: AbstractControl, inverse: boolean = false) => {
  return (enabled: boolean) => {
    const inversedEnabled = inverse ? !enabled : enabled;
    if (!inversedEnabled && slave.enabled) {
      slave.disable();
    } else if (inversedEnabled && !slave.enabled) {
      slave.enable();
    }
  }
}
