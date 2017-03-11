import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'custom-infinite',
  templateUrl: 'infinite-custom.comp.html'
})
export class CustomInfiniteComp {
    public listLength = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];

  constructor(public navCtrl: NavController) {

  }

  doInfinite($event) {
      console.log("infinite event firing");
      setTimeout( () => {
          this.listLength.push(...this.listLength);
          $event.complete();
      }, 1000);
  }

}
