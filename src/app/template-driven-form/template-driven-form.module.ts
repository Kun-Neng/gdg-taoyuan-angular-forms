import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ForbiddenValidatorDirective } from './forbidden-validator.directive';
import { TemplateDrivenFormRoutingModule } from './template-driven-form-routing.module';
import { TemplateDrivenFormComponent } from './template-driven-form.component';

@NgModule({
  imports: [CommonModule, FormsModule, TemplateDrivenFormRoutingModule],
  declarations: [ForbiddenValidatorDirective, TemplateDrivenFormComponent]
})
export class TemplateDrivenFormModule { }
