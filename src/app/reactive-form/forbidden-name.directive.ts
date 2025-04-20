import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

export function forbiddenNameValidator(reg: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const isForbidden = reg.test(control.value);
    return isForbidden ? { forbiddenName: { value: control.value }} : null;
  }
}
