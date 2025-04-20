import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ForbiddenValidatorDirective } from './forbidden-validator.directive';

@Component({
  selector: 'app-template-driven-form',
  imports: [FormsModule, ForbiddenValidatorDirective],
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {
  // view model object
  user = {
    account: '',
    password: ''
  };

  constructor() { }

  ngOnInit() { }

  submit() {
    console.log(this.user);
  }
}
