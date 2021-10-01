import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClickCounterComponent } from './click-counter/click-counter.component';
import { LandingComponent } from './landing/landing.component';
import { GuessTheColorComponent } from './guess-the-color/guess-the-color.component';
import {SecondsPipe} from './seconds.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ClickCounterComponent,
    LandingComponent,
    GuessTheColorComponent,
    SecondsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
