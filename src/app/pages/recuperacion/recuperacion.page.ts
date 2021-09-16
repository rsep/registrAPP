import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common'; //para activar last-page
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-recuperacion',
  templateUrl: './recuperacion.page.html',
  styleUrls: ['./recuperacion.page.scss'],
})
export class RecuperacionPage implements OnInit {

  user={
    nombre: '',
    password: '',
    mail: ''
  }

  constructor(public toastController: ToastController, private location: Location, private activeRoute: ActivatedRoute, private router: Router) {
    this.activeRoute.queryParams.subscribe(params=>{
      if(this.router.getCurrentNavigation().extras.state){
        this.user.nombre=this.router.getCurrentNavigation().extras.state.user;
        console.log(this.user.nombre)
      }
    });
   }

  ngOnInit() {}

  onSubmitTemplate(){
    console.log('Form submit');
    console.log(this.user.nombre);
  }

  // método para volver a locación previa
  back() {
    this.location.back();
  }

  // metodo para enviar mail
  send(){
    this.presentToast("Contraseña enviada al correo "+ this.user.mail)
    this.router.navigate(['/login'])
  }

  // Método Toast notificacion
  async presentToast(msg:string) {
  const toast = await this.toastController.create({
    message: msg,
    duration: 3250,
    position: "bottom",
    color: "dark"
  });
  toast.present();
}

}
