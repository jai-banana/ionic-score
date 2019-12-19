import { Component } from '@angular/core';
import { ModalController } from "@ionic/angular";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private modal: ModalController) {}

  // openmodal(){
  //   this.modal.create({
  //     component: HitpadComponent
  //   }).then( res => {
  //     res.present();
  //   });
  // }

}
