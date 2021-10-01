import {Component, OnInit} from '@angular/core';
import {ResultsService} from '../results.service';

@Component({
  selector: 'app-guess-the-color',
  templateUrl: './guess-the-color.component.html',
  styleUrls: ['./guess-the-color.component.scss']
})
export class GuessTheColorComponent implements OnInit {

  public colors = ['red', 'green', 'blue', 'yellow', 'purple'];
  public gameOver = false;
  public won = false;

  private secretColor!: string;

  constructor(private resultsService: ResultsService) {
  }

  ngOnInit(): void {
    this.secretColor = this.colors[Math.floor(Math.random() * this.colors.length)];
  }

  selectColor(color: string) {
    this.won = color === this.secretColor;
    this.gameOver = true;
    this.resultsService.incrementResultCounter(this.won);
  }

}
