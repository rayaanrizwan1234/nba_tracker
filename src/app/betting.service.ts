import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BettingService {
 public betGames: Map<number, number>;

  constructor() { 
    this.betGames = new Map<number, number>();
  }

  public bet(gameId: number, teamId: number) : Map<number, number> {
    this.betGames.set(gameId, teamId);
    return this.betGames;
  }
}
