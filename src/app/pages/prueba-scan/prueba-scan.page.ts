import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-prueba-scan',
  templateUrl: './prueba-scan.page.html',
  styleUrls: ['./prueba-scan.page.scss'],
})
export class PruebaScanPage implements OnInit {
  
  code: any;
  constructor(private barcodeScanner: BarcodeScanner) { }

  ngOnInit() {
  }

  scaner(){
    this.barcodeScanner.scan().then(barcodeData => {
      this.code = barcodeData.text;
      console.log('Barcode data', this.code);
     }).catch(err => {
         console.log('Error', err);
     });
  }
}
