import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateDrivenFormComponent } from './template-driven-form.component';

const routes: Routes = [
  { path: '', component: TemplateDrivenFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateDrivenFormRoutingModule { }
