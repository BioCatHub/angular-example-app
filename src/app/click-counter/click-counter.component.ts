import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {timer} from 'rxjs';
import {ResultsService} from '../results.service';

@Component({
  selector: 'app-click-counter',
  templateUrl: './click-counter.component.html',
  styleUrls: ['./click-counter.component.scss']
})
export class ClickCounterComponent implements OnInit {

  @Input() maxTime = 5000;

  public maxTimeInSeconds = 0;
  public gameOver = false;
  public won = false;

  ngOnInit(): void {
    this.maxTimeInSeconds = this.maxTime / 1000;
    timer(this.maxTime).subscribe(()=>{
      this.gameOver = true;
      if(this.clicks >= 10){
        this.won = true;
      }
      this.resultsService.incrementResultCounter(this.won);
    })
  }

  @HostListener('click', ['$event.target'])
  onClick() {
    this.clicks++;
  }
  public clicks = 0;



  constructor(private resultsService: ResultsService) {
  }



}
