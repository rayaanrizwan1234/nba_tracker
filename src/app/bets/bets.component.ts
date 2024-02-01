import { Component, OnInit } from '@angular/core';
import { BettingService } from '../betting.service';

@Component({
  selector: 'app-bets',
  templateUrl: './bets.component.html',
  styleUrls: ['./bets.component.scss']
})
export class BetsComponent implements OnInit {

  bettedGames: Map<number, number>;
  gamesJson : string;

  constructor(private bettingService: BettingService) { }

  ngOnInit(): void {
    this.bettedGames = this.bettingService.betGames;
    this.bettedGames.forEach((value: number, key: number) => {
    });
  }
}
