import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import  { createCustomElement } from '@angular/elements';
import  { Injector} from '@angular/core';

import { AppComponent } from './app.component';
import { InfoComponent } from './info/info.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule {
  constructor(private injector: Injector) {
    const el = createCustomElement(InfoComponent, { injector });
    customElements.define('personal-details', el);
  }
  ngDoBootstrap() {}
 }
