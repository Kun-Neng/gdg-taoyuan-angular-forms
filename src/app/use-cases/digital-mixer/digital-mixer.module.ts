import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DigitalMixerRoutingModule } from './digital-mixer-routing.module';
import { DigitalMixerComponent } from './digital-mixer.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, DigitalMixerRoutingModule],
  declarations: [DigitalMixerComponent]
})
export class DigitalMixerModule { }
