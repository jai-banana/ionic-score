import { Component, OnInit } from '@angular/core';
import { TeamsListService } from "./teams-list.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.page.html',
  styleUrls: ['./teams-list.page.scss'],
})
export class TeamsListPage implements OnInit {

  teamslist: any;
  selectedteams = new Set();

  constructor(private tl: TeamsListService, private router: Router) { }

  ngOnInit() {
   this.getAllTeams();
  }

  getAllTeams(){
    this.teamslist = this.tl.teamslist;
  }

  selectedTeam(tname){
    if(this.selectedteams.has(tname)){
      this.selectedteams.delete(tname);
      return;
    }
    if(this.selectedteams.size < 2){
      this.selectedteams.add(tname);
    }
    this.tl.selectedteams_s.next(this.selectedteams);
  }

  selectionDone(){
    this.router.navigate(['/toss']);
  }

}
