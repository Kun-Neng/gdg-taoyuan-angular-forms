import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { DynamicFormService, FormField } from './dynamic-form.service';

@Component({
  selector: 'app-dynamic-form',
  imports: [ReactiveFormsModule, NgFor, NgIf],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.css'
})
export class DynamicFormComponent implements OnInit, OnDestroy {
  fb = inject(FormBuilder);
  dynamicFormService = inject(DynamicFormService);

  fields: FormField[] = [];
  dynamicForm: FormGroup;

  private _destroy$ = new Subject<void>();

  ngOnInit(): void {
    this.dynamicFormService.fetchFormFields().pipe(
      takeUntil(this._destroy$)
    ).subscribe(fields => {
      this.fields = fields;
      this.addFormControls(fields);
    });
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

  submit() {
    if (this.dynamicForm.valid) {
      console.debug('dynamicForm', this.dynamicForm.value);
    } else {
      console.error('Validation failure');
    }
  }

  private addFormControls(fields: FormField[]) {
    const group: { [fieldName: string]: FormControl } = {};

    fields.forEach(field => {
      group[field.name] = new FormControl('', field.required ? Validators.required : []);
    });

    this.dynamicForm = this.fb.group(group);
  }
}
