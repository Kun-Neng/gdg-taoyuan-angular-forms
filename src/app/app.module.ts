import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TemplateDrivenFormModule } from './template-driven-form/template-driven-form.module';
import { ReactiveFormModule } from './reactive-form/reactive-form.module';

import { AppComponent } from './app.component';

@NgModule({
  imports:      [ BrowserModule, TemplateDrivenFormModule, ReactiveFormModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
