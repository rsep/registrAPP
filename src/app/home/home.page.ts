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

  scan(){
  //   this.code = { 
  //     "idAsignatura": "PGY4121",
  //     "seccion": "007D",
  //     "asignatura": "Programación de Aplicaciones Móviles",
  //     "docente": "Nancy Bernal",
  //     "correo": "gudea.red@gmail.cl"
  // };
  // // this.code = "hola";
  //   console.log('JSON EN DURO', this.code);

  //     let navigationExtras: NavigationExtras={
  //       state:{ code: this.code }
  //     };  
  //     this.router.navigate(['/resumen'],navigationExtras)
    
    this.barcodeScanner.scan().then(barcodeData => {
      this.code = barcodeData.text;
      console.log('Barcode data', this.code);

        let navigationExtras: NavigationExtras={
          state:{ code: this.code }
        };
        this.router.navigate(['/resumen'],navigationExtras)

     }).catch(err => {
         console.log('Error', err);
     });
  }


  
}
