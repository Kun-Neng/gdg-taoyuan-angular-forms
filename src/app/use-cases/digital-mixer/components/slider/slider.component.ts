import { Component, inject, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-slider',
  imports: [ReactiveFormsModule],
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit, OnDestroy {
  @Input() index: string = '';

  builder = inject(FormBuilder);

  form = this.builder.nonNullable.group({
    sliderValue: this.builder.nonNullable.control(41)
  });

  private _destroy$ = new Subject<void>();

  ngOnInit(): void {
    this.form.get('sliderValue').valueChanges.pipe(
      takeUntil(this._destroy$)
    ).subscribe(value => {
      console.log(value);
    });
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
