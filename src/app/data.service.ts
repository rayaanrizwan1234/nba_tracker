import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Player } from './players/player';

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
}
