import { Component, OnInit } from '@angular/core';
import { TeamsListService } from "../teams-list/teams-list.service";

@Component({
  selector: 'app-toss',
  templateUrl: './toss.page.html',
  styleUrls: ['./toss.page.scss'],
})
export class TossPage implements OnInit {

  selectedteams: any;

  constructor(private tl: TeamsListService) { }

  ngOnInit() {
    this.tl.selectedteams_s.subscribe(res => {
      this.selectedteams = res;
    });
    
  }

}
