import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.page.html',
  styleUrls: ['./resumen.page.scss'],
})
export class ResumenPage implements OnInit {

  today= Date.now();

  constructor(private router: Router, private alertCtrl: AlertController) { }

  logout(){
    this.router.navigate(['/login']);
  }

  ngOnInit() {
  }

  volver(){
    this.router.navigate(['/qr']);
  }

    async showAlert(){
      const alert = await this.alertCtrl.create({
        header:'Cerrar Sesión',
        message:'¿Quieres cerrar sesión?',
        buttons:[{text:'OK', handler: ()=>{this.logout()}},'Cancelar']
      });
      await alert.present();

      
    };
}
