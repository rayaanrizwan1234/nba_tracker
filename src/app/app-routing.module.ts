import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayersComponent } from './players/players.component';
import { TrackerComponent } from './tracker/tracker.component';
import { BettingService } from './betting.service';
import { BetsComponent } from './bets/bets.component';

const routes: Routes = [
  {
    path: 'players', component:PlayersComponent
  }, 
  {
    path: 'tracker', component:TrackerComponent
  },
  {
    path: 'bets', component:BetsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
