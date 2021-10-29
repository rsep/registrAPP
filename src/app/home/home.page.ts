import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { IUsers } from '../interfaces/iusers';

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
