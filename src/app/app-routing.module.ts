import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'teams-list', pathMatch: 'full' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'teams-list', loadChildren: './pages/teams-list/teams-list.module#TeamsListPageModule' },
  { path: 'toss', loadChildren: './pages/toss/toss.module#TossPageModule' },
  { path: 'scorer', loadChildren: './pages/scorer/scorer.module#ScorerPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
