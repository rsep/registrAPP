import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {


  constructor(private router: Router, private alertCtrl:AlertController, private authService: AuthService) { }

  ngOnInit() {}


  logout(){
    let status = {'estado':0, 'user': ""};
    localStorage.setItem("log",JSON.stringify(status));
    this.router.navigate(['/login']);
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
