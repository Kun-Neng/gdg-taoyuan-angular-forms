import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TemplateDrivenFormRoutingModule } from './template-driven-form-routing.module';
import { TemplateDrivenFormComponent } from './template-driven-form.component';

@NgModule({
  imports: [CommonModule, FormsModule, TemplateDrivenFormRoutingModule],
  declarations: [TemplateDrivenFormComponent]
})
export class TemplateDrivenFormModule { }
