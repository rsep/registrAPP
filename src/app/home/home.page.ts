import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { IUsers } from '../interfaces/iusers';

// importar servicio de la Base de Datos de usuarios
import { DataService } from 'src/app/services/data.service';
import { Datos } from '../interfaces/usuarios';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  user: IUsers;
  

  constructor(private alertCtrl: AlertController, private menu: MenuController, 
    private router: Router, private authService: AuthService) {
    this.user=authService.currentUser;

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
