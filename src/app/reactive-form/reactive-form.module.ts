import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormRoutingModule } from './reactive-form-routing.module';
import { ReactiveFormComponent } from './reactive-form.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, ReactiveFormRoutingModule],
  declarations: [ReactiveFormComponent]
})
export class ReactiveFormModule { }
