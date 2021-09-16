import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  user={
    nombre: '',
    password: '',
    mail: ''
  }
  
  // constructor() {}
  constructor(private alertCtrl: AlertController, private menu: MenuController, private activeRoute: ActivatedRoute, private router: Router) {
    this.activeRoute.queryParams.subscribe(params=>{
      if(this.router.getCurrentNavigation().extras.state){
        this.user.nombre=this.router.getCurrentNavigation().extras.state.user;
        console.log(this.user.nombre)
      }
    });
  }

  // Verificar ruta al nombre de la página que lee escaner
  scan(){
    this.router.navigate(['/login'])
  }

  logout(){
    this.router.navigate(['/login'])
  }

  // Alert
  async showAlert(){
    const alert = await this.alertCtrl.create({
      header:'Cerrar Sesión',
      message:'¿Quieres cerrar sesión?',
      buttons:[{text:'OK', handler: ()=>{this.logout()}},'Cancel']
    });
    await alert.present();

  };

}
