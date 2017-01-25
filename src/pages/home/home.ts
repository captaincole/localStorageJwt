import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AuthHttp } from 'angular2-jwt';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public local: Storage = new Storage();

  constructor(public navCtrl: NavController,
              public authHttp: AuthHttp) {
      // Set real token
      this.local.set('id_token', 'jwt_token');
  }

  sendHttp() {
    console.log('Send Http');
    this.authHttp.get('http://google.com').subscribe( (data) => {
      console.log('Got Data!');
    });
  }

}
