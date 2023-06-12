import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PriceServiceDemoComponent } from './price-service-demo/price-service-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    PriceServiceDemoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
