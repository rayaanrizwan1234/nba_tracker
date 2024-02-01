import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { GameData } from '../tracker/game';
import { BettingService } from '../betting.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
  @Input() gameData : GameData[];
  betGames: Map<number, number>;

  constructor(private dataService: DataService, private bettingService: BettingService) {
    this.betGames = new Map<number, number>();
  }

  ngOnInit(): void {
    
  }

  bet(gameId: number, teamId: number) {
    this.betGames = this.bettingService.bet(gameId, teamId);
  }
}
