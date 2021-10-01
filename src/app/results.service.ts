import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {

  private _timesWon = 0;
  private _timesLost = 0;

  incrementResultCounter(won: boolean) {
    if (won) {
      this._timesWon++;
    } else {
      this._timesLost++;
    }
  }

  get timesLost(): number {
    return this._timesLost;
  }
  get timesWon(): number {
    return this._timesWon;
  }

}
