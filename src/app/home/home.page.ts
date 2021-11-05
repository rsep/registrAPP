import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { IUsers } from '../interfaces/iusers';

import { BarcodeScanner, BarcodeScannerOptions  } from '@ionic-native/barcode-scanner/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  user: IUsers;
  code: any;

  constructor(private barcodeScanner: BarcodeScanner, private alertCtrl: AlertController, private menu: MenuController, 
    private router: Router, private authService: AuthService) {
    this.user=authService.currentUser;
  }

  // Verificar ruta al nombre de la página que lee escaner
  // scan(){
  //   this.router.navigate(['/qr'])
  // }

  scan(){
    this.barcodeScanner.scan().then(barcodeData => {
      this.code = barcodeData.text;
      console.log('Barcode data', this.code);
     }).catch(err => {
         console.log('Error', err);
     });
     if(this.barcodeScanner.scan()){
      let navigationExtras: NavigationExtras={
        state:{ code: this.code }
      };
      this.router.navigate(['/resumen'],navigationExtras)
     }
  }

}
