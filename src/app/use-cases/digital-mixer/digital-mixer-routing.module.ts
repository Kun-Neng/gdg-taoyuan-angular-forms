import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DigitalMixerComponent } from './digital-mixer.component';

const routes: Routes = [
  { path: '', component: DigitalMixerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DigitalMixerRoutingModule { }
