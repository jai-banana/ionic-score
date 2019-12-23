import { Component, OnInit } from '@angular/core';
import { TeamsListService } from "../teams-list/teams-list.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-toss',
  templateUrl: './toss.page.html',
  styleUrls: ['./toss.page.scss'],
})
export class TossPage implements OnInit {

  selectedteams: any;
  TeamNotSelectedYet: boolean = true;
  firstBatting: any;
  firstBowling: any;

  constructor(private tl: TeamsListService, private router: Router) { }

  ngOnInit() {
    this.tl.selectedteams_s.subscribe(res => {
      this.selectedteams = res;
      console.log(this.selectedteams);
    });
  }

  selectTeam(val){
    let tlist = this.tl.teamslist;
    for(let i = 0; i < tlist.length; i++){
      if(tlist[i].teamname === val){
        this.firstBatting = tlist[i];
        break;
      };
    }
    this.getBowlingTeam();
    this.TeamNotSelectedYet = false;
  }

  getBowlingTeam(){
    this.selectedteams.forEach(t => {
      if(t !== this.firstBatting){
        this.firstBowling = t;
      }
    });
  }

  startMatch(){
    this.router.navigate(['/scorer']);
  }

}
