import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DragulaModule } from 'ng2-dragula';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragulaModule.forRoot() // https://stackoverflow.com/a/54352978/7610023
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
