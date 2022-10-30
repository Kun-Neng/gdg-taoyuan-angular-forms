import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'template-driven-form',
    loadChildren: () => import('./template-driven-form/template-driven-form.module').then(m => m.TemplateDrivenFormModule)
  },
  {
    path: 'reactive-form',
    loadChildren: () => import('./reactive-form/reactive-form.module').then(m => m.ReactiveFormModule)
  },
  {
    path: '', redirectTo: 'reactive-form', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
