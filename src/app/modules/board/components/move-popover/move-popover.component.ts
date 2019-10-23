import { Component, OnInit } from '@angular/core';
import { PopoverController, ModalController } from '@ionic/angular';
import { MoveModalComponent } from '../move-modal/move-modal.component';

@Component({
  selector: 'app-move-popover',
  templateUrl: './move-popover.component.html',
  styleUrls: ['./move-popover.component.scss']
})
export class MovePopoverComponent implements OnInit {
  public display: boolean = true;

  constructor(public modalController: ModalController, public popoverCtrl: PopoverController) { }

  ngOnInit(): void { }

  public async presentModal() {
    this.popoverCtrl.dismiss();

    const modal = await this.modalController.create({
      component: MoveModalComponent
    });
    return await modal.present();
  }
}
