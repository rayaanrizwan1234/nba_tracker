import { Component, OnInit } from '@angular/core';
import { BettingService } from '../betting.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-bets',
  templateUrl: './bets.component.html',
  styleUrls: ['./bets.component.scss']
})
export class BetsComponent implements OnInit {

    bettedGames :Map<number, string>;
    mapGames: Map<number, number>;

    constructor(private bettingService: BettingService, private dataService : DataService) {
      this.bettedGames = new Map<number, string>();
    }

    ngOnInit(): void {
      this.mapGames = this.bettingService.GamesMap;
      console.log(this.mapGames);
      
      for (let gameId of this.mapGames.keys()) {
        this.dataService.getGameById(gameId).subscribe((data) => {
          this.bettedGames.set(gameId, data);
        });
      }
      // console.log(this.bettedGames);
    }
  }
