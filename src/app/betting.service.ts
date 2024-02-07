import { Injectable } from '@angular/core';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class BettingService {
 public betGames: Map<number, number>;

  constructor(private session: SessionService) { 
    this.betGames = new Map<number, number>();
  }

  public get GamesMap() : Map<number, number> {
    return this.session.getData() || this.betGames;
  }

  public bet(gameId: number, teamId: number) : Map<number, number> {
    this.betGames.set(gameId, teamId);
    this.session.setData(this.betGames);
    return this.betGames;
  }
}
