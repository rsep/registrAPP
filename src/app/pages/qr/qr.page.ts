import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-maqueta-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QRPage implements OnInit {



  constructor(private router:Router, public loadingController: LoadingController) {
  
   }
   
   forwardQr(){
    
  }

   async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'custom-loading',
      message: 'Registrando asistencia',
      duration: 1000,
      showBackdrop: true,
      spinner:"lines",
    });
    await loading.present();

    loading.onDidDismiss().then(()=>{
      this.router.navigate(['/resumen']);
    });
    
    console.log('Loading dismissed!');
  }


  atras() {
    this.router.navigate(['/home'])
  }
  ngOnInit() {
  }

}

