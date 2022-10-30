import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { forbiddenNameValidator } from './forbidden-name.directive';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  myForm = new FormGroup({
    account: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      forbiddenNameValidator(/admin/i)
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ])
  });

  get account() {
    return this.myForm.get('account');
  }

  get password() {
    return this.myForm.get('password');
  }

  constructor() { }

  ngOnInit() { }

  submit() {
    console.log(this.myForm.value);
  }
}
