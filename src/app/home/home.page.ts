import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
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

}
