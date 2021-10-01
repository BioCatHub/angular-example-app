import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingComponent} from './landing/landing.component';
import {GuessTheColorComponent} from './guess-the-color/guess-the-color.component';
import {ClickCounterComponent} from './click-counter/click-counter.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'click-counter',
    component: ClickCounterComponent
  },
  {
    path: 'guess-the-color',
    component: GuessTheColorComponent
  },
]


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
