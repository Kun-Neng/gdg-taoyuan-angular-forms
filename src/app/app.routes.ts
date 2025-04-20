import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'template-driven-form',
    loadComponent: () => import('./template-driven-form/template-driven-form.component').then(m => m.TemplateDrivenFormComponent)
  },
  {
    path: 'reactive-form',
    loadComponent: () => import('./reactive-form/reactive-form.component').then(m => m.ReactiveFormComponent)
  },
  {
    path: 'dynamic-form',
    loadComponent: () => import('./use-cases/dynamic-form/dynamic-form.component').then(m => m.DynamicFormComponent)
  },
  {
    path: 'digital-mixer',
    loadComponent: () => import('./use-cases/digital-mixer/digital-mixer.component').then(m => m.DigitalMixerComponent)
  },
  {
    path: '', redirectTo: 'reactive-form', pathMatch: 'full'
  }
];
