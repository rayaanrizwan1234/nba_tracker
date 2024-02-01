import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Player } from './players/player';
import { GameData } from './tracker/game';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor (private http: HttpClient) {
    
  }

  getData() {
    return this.http.get<String>("http://127.0.0.1:5000/get_data");
  }

  getPlayerData(id: number) {
    return this.http.get<Player>(`https://www.balldontlie.io/api/v1/players/${id}`);
  }

  getTeamData(id: number) {
    return this.http.get<string>(`https://www.balldontlie.io/api/v1/teams/${id}`);
  }

  getGameData(season: number, teamId: number, date: string) {
    return this.http.get<string>(`https://www.balldontlie.io/api/v1/games?seasons[]=${season}&team_ids[]=${teamId}&dates[]=${date}`);
  }

  getGameById(id: number) {
    return this.http.get<string>(`https://www.balldontlie.io/api/v1/games/${id}`);
  }
}
