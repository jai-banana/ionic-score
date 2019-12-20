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

  constructor(private tl: TeamsListService, private router: Router) { }

  ngOnInit() {
    this.tl.selectedteams_s.subscribe(res => {
      this.selectedteams = res;
    });
  }

  startMatch(){
    this.router.navigate(['/scorer']);
  }

  selectTeam(val){
    console.log(val);
    this.TeamNotSelectedYet = false;
  }

}
