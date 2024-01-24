import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Player } from './player';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {
  isDrawerOpen = false;
  player: Player;
  searchId: number;

  pinnedPlayers: Player[] = [];

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
  }

  onIdChange() {
    if (this.searchId) {
      this.dataService.getPlayerData(this.searchId).subscribe((data) => {
        this.player = data;
      })
    } else {
      this.player = null;
    }
  }

  pinPlayer() {
    this.pinnedPlayers = [...this.pinnedPlayers, this.player];
  }

  toggleDrawer() {
    this.isDrawerOpen = !this.isDrawerOpen;
  }
}
