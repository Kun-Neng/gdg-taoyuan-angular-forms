import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { map, filter } from 'rxjs/operators';
import { forbiddenNameValidator } from './forbidden-name.directive';

interface LoginForm {
  account: FormControl<string>;
  password: FormControl<string>;
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
    password: new FormControl('devfest', [
      Validators.required,
      Validators.minLength(6)
    ])
  });

  // myForm = this.fb.nonNullable.group({
  //   account: ['', {
  //     validators: [Validators.required, Validators.minLength(4), forbiddenNameValidator(/admin/i)]
  //   }],
  //   password:['', {
  //     validators: [Validators.required, Validators.minLength(6)]
  //   }]
  // });

  get account() {
    return this.myForm.get('account');
  }

  get password() {
    return this.myForm.get('password');
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm.valueChanges
      .pipe(
        map((value) => value.account.toUpperCase()),
        filter(() => this.myForm.valid)
      )
      .subscribe((value) => {
        console.log(`Deal with valid form value: ${JSON.stringify(value)}`);
      });
  }

  submit() {
    console.log(this.myForm.value);
  }
}
