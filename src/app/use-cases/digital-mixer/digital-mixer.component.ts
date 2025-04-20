import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { NgFor } from '@angular/common';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { SliderComponent } from './components/slider/slider.component';
import { CvaSliderComponent } from './components/cva-slider/cva-slider.component';

@Component({
  selector: 'app-digital-mixer',
  imports: [ReactiveFormsModule, NgFor, SliderComponent, CvaSliderComponent],
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
    sixth: new FormControl<number>(70),
    cvaSlider: new FormControl<number>(31)
  });
    
  mixersArray = new FormArray<FormControl<number>>([]);
  myNewForm = new FormGroup({
    mixers: this.mixersArray
  });

  private _destroy$ = new Subject<void>();

  ngOnInit() {
    const mixerValues = [20, 50, 40, 80, 30, 70];
    mixerValues.forEach(value => {
      this.mixersArray.push(new FormControl(value));
    });

    this.myForm.valueChanges.pipe(
      takeUntil(this._destroy$)
    ).subscribe(values => {
      console.log('myForm');
      console.table(values);
    });

    this.myNewForm.valueChanges.pipe(
      takeUntil(this._destroy$)
    ).subscribe(values => {
      console.log('myNewForm');
      console.table(values);
    });
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
