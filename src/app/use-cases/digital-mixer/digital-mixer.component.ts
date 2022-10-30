import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-digital-mixer',
  templateUrl: './digital-mixer.component.html',
  styleUrls: ['./digital-mixer.component.css']
})
export class DigitalMixerComponent implements OnInit {
  myForm = new FormGroup({
    first: new FormControl<number>(20),
    second: new FormControl<number>(50),
    third: new FormControl<number>(40),
    fourth: new FormControl<number>(80),
    fifth: new FormControl<number>(30),
    sixth: new FormControl<number>(70),
  });

  constructor() { }

  ngOnInit() {
    this.myForm.valueChanges.subscribe(values => {
      console.table(values);
    });
  }
}
