import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GameData } from './game';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.scss'],
})
export class TrackerComponent implements OnInit {
  searchId: number;
  team: string;
  teamForm: FormGroup;
  viewComp = false;

  nextGames: GameData[] = [];
  previousGames: GameData[] = [];

  constructor(
    private dataService: DataService,
    private formBuider: FormBuilder
  ) {}

  ngOnInit(): void {
    this.teamForm = this.formBuider.group({
      selectedTeam: ['', [Validators.required]],
      selectedSeason: ['', [Validators.required]],
    });
  }

  onIdChange() {
    if (this.searchId) {
      this.dataService.getTeamData(this.searchId).subscribe((data) => {
        this.team = data;
      });
    } else {
      this.team = null;
    }
  }

  getData() {
    this.nextGames = [];
    // iterate over the last 7 games and the next 7 games
    let previousDate = new Date();

    // while (this.nextGames.length < 7) {
    for (let i = 0; i <= 20; i++) {
      let year = previousDate.getFullYear();
      let month = (previousDate.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
      let day = previousDate.getDate().toString().padStart(2, '0');

      let formattedDate = `${year}-${month}-${day}`;

      let data;
      this.dataService
        .getGameData(
          this.teamForm.value.selectedSeason,
          this.teamForm.value.selectedTeam,
          formattedDate
        )
        .subscribe((gameData) => {
          data = gameData['data'][0];
          if(data) {
            this.nextGames = [...this.nextGames, gameData['data'][0]];
          }
        });
        previousDate.setDate(previousDate.getDate()+1);
      }
    this.viewComp = true;
  }
}
