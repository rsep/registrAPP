import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

// importar servicio de la Base de Datos de usuarios
import { DataService } from 'src/app/services/data.service';
import { Datos } from '../interfaces/usuarios';

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
  constructor(private dataService: DataService, private alertCtrl: AlertController, private menu: MenuController, private activeRoute: ActivatedRoute, private router: Router) {
    this.activeRoute.queryParams.subscribe(params=>{
      if(this.router.getCurrentNavigation().extras.state){
        this.user.nombre=this.router.getCurrentNavigation().extras.state.user;
        console.log(this.user.nombre)
      }
    });
  }

  // Verificar ruta al nombre de la página que lee escaner
  scan(){
    this.router.navigate(['/qr'])
  }

  logout(){
    // this.dataService.desactivarUser(this.user.nombre);
    // this.dataService.estadoUsuario[0].user = "";
    // this.dataService.estadoUsuario[0].estado = 0;
    // console.log(this.dataService.estado);
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
