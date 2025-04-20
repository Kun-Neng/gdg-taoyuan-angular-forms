import { Component, Input, OnDestroy, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormBuilder, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-cva-slider',
  imports: [ReactiveFormsModule],
  templateUrl: './cva-slider.component.html',
  styleUrls: ['./cva-slider.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CvaSliderComponent),
    multi: true
  }]
})
export class CvaSliderComponent implements OnInit, OnDestroy, ControlValueAccessor {
  @Input() index: string = '';

  form = this.builder.nonNullable.group({
    sliderValue: this.builder.nonNullable.control(41)
  });

  onChange = (value: number) => {};
  onTouched = () => {};

  writeValue(value: number): void {
    this.form.controls.sliderValue.setValue(value);
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    // throw new Error('Method not implemented.');
  }

  private _destroy$ = new Subject<void>();

  constructor(private builder: FormBuilder) { }

  ngOnInit(): void {
    this.form.get('sliderValue').valueChanges.pipe(
      takeUntil(this._destroy$)
    ).subscribe(value => {
      // console.log(value);
      this.onChange(value);
    });
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
