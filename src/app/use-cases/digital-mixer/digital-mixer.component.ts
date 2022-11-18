import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-digital-mixer',
  templateUrl: './digital-mixer.component.html',
  styleUrls: ['./digital-mixer.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DigitalMixerComponent implements OnInit, OnDestroy {
  myForm = new FormGroup({
    first: new FormControl<number>(20),
    second: new FormControl<number>(50),
    third: new FormControl<number>(40),
    fourth: new FormControl<number>(80),
    fifth: new FormControl<number>(30),
    sixth: new FormControl<number>(70)
  });
    
  mixersArray = new FormArray<FormControl<number>>([]);
  myNewForm = new FormGroup({
    mixers: this.mixersArray
  });

  private myFormSubscription!: Subscription;
  private myNewFormSubscription!: Subscription;

  constructor() { }

  ngOnInit() {
    const mixerValues = [20, 50, 40, 80, 30, 70];
    mixerValues.forEach(value => {
      this.mixersArray.push(new FormControl(value));
    });

    this.myFormSubscription = this.myForm.valueChanges.subscribe(values => {
      console.log('myForm');
      console.table(values);
    });

    this.myNewFormSubscription = this.myNewForm.valueChanges.subscribe(values => {
      console.log('myNewForm');
      console.table(values);
    });
  }

  ngOnDestroy() {
    this.myFormSubscription?.unsubscribe();
    this.myNewFormSubscription?.unsubscribe();
  }
}
