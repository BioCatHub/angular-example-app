import {Component} from '@angular/core';
import {ResultsService} from './results.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public resultsService: ResultsService) {
  }

}
