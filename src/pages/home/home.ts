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
      let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkZXNjcmlwdGlvbiI6Ik1lIFVwZGF0ZWQhIiwiZmlyZWJhc2VVSUQiOiIxMHZUVjBQNmFKUUR1Rk5McFJnOHE4eklUQWsyIiwidXNlcm5hbWUiOiJhbmRyZXcydGVzdDIiLCJ0ZXJtc09mU2VydmljZSI6dHJ1ZSwicGhvdG9VcmwiOiJodHRwczovL2ZpcmViYXNlc3RvcmFnZS5nb29nbGVhcGlzLmNvbS92MC9iL3BvcHBpbmctaW5mZXJuby03NTc3LmFwcHNwb3QuY29tL28vaW1hZ2VzJTJGMTB2VFYwUDZhSlFEdUZOTHBSZzhxOHpJVEFrMjE0ODE1ODYzNzE4OTZjZHZfcGhvdG9fMDAzLmpwZz9hbHQ9bWVkaWEmdG9rZW49ZDA0NzIxNmItNTZhZi00MzI5LWE4NTQtOGM2YzZjOGRmNWU4IiwibmFtZSI6IiIsImVtYWlsIjoiYW5kcmV3QGdtYWlsLmNvbSIsImRpc3BsYXlOYW1lIjoiQW5kcmV3IENvbGUiLCJfaWQiOiI1ODU0NGY3ZGU4Y2Q5Y2QwNDI4NDg5YjkiLCJpYXQiOjE0ODUzMjY0ODZ9.qY4fXg9wbSAfaFOpd8QCwUJ78LVeoB82xGJKu560pFI'
      this.local.set('id_token', token);
  }

  sendHttp() {
    console.log('Send Http');
    this.authHttp.get('https://www.instagram.com').subscribe( (data) => {
      console.log('Got Data!');
    });
  }

}
