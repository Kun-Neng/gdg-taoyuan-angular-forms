import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { map, filter, tap, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { forbiddenNameValidator } from './forbidden-name.directive';

interface LoginForm {
  account: FormControl<string>;
  password: FormControl<string>;
  // passwordConfirm: FormControl<string>;
};

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  myForm = new FormGroup<LoginForm>({
    account: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      forbiddenNameValidator(/admin/i)
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ]),
    // passwordConfirm: new FormControl('', Validators.minLength(6))
  }/*, this.passwordMatchValidator*/);

  // myForm = this.fb.nonNullable.group({
  //   account: ['', {
  //     validators: [Validators.required, Validators.minLength(4), forbiddenNameValidator(/admin/i)]
  //   }],
  //   password:['', {
  //     validators: [Validators.required, Validators.minLength(6)]
  //   }]
  // });

  passwordStrength = 0;

  get account() {
    return this.myForm.get('account');
  }

  get password() {
    return this.myForm.get('password');
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm.valueChanges.pipe(
        filter((value) => !!value.account),
        map((value) => value.account.toUpperCase()),
        filter(() => this.myForm.valid)
      ).subscribe((value) => {
        console.log(`Valid account: ${JSON.stringify(value)}`);
      });
    
    this.password.valueChanges.pipe(
        debounceTime(400),
        distinctUntilChanged()
      ).subscribe(newValue => {
        this.passwordStrength = newValue ? newValue.length : 0;
      });
  }

  submit() {
    console.log(this.myForm.value);
  }

  partialUpdate() {
    this.myForm.patchValue({
      account: 'GDG_Taoyuan'
    });
  }

  fullUpdate() {
    this.myForm.setValue({
      account: 'GDG_Taoyuan',
      password: 'devfest2022',
      // passwordConfirm: 'devfest2022'
    });
  }

  reset() {
    this.myForm.reset();
  }

  // Create a form group with a group-level validator
  private passwordMatchValidator(g: FormGroup) {
    return g.get('password').value === g.get('passwordConfirm').value ? null : { 'mismatch': true };
  }
}
