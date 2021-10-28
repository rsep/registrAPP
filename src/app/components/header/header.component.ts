import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private alertCtrl: AlertController) { }

  ngOnInit() {}


  logout(){
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
