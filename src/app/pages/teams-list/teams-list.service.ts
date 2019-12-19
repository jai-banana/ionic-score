import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TeamsListService {

  teamslist = [
    {
      teamname: 'Potthai cricket team',
      players: [
        {name: 'Karthy', jercy:1},
        {name: 'Raja', jercy:7},
        {name: 'Vembu', jercy:10},
        {name: 'Barakath', jercy:18},
        {name: 'Jailani', jercy:14},
        {name: 'Sadam', jercy:11},
        {name: 'Abdul Rahim', jercy:21},
        {name: 'Ashik', jercy:33},
        {name: 'Bismillah', jercy:8},
        {name: 'Chappi', jercy:4},
        {name: 'Yasin', jercy:12},
      ]
    },
    {
      teamname: 'Thaikkah cricket team',
      players: [
        {name: 'Niyas', jercy:1},
        {name: 'Ali', jercy:7},
        {name: 'Navas', jercy:10},
        {name: 'Jalal', jercy:18},
        {name: 'Bhasha', jercy:14},
        {name: 'Aji', jercy:11},
        {name: 'Walker Ali', jercy:21},
        {name: 'Basha 2', jercy:33},
        {name: 'Afridi', jercy:8},
        {name: 'Sadam', jercy:4},
        {name: 'Usama', jercy:12},
      ]
    },
    {
      teamname: 'Police cricket team',
      players: [
        {name: 'Police 1', jercy:1},
        {name: 'Police 2', jercy:7},
        {name: 'Police 3', jercy:10},
        {name: 'Police 4', jercy:18},
        {name: 'Police 5', jercy:14},
        {name: 'Police 6', jercy:11},
        {name: 'Police 7', jercy:21},
        {name: 'Police 8', jercy:33},
        {name: 'Police 9', jercy:8},
        {name: 'Police 10', jercy:4},
        {name: 'Police 11', jercy:12},
      ]
    }   
            ]

  selectedteams_s = new BehaviorSubject(new Set());          

  constructor() { }

}
