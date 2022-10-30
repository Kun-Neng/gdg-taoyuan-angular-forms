import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
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
