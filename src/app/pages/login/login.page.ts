import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  // usuario: String;
  user={
    nombre:'',
    password: '',
    mail: ''
  }


  constructor(private router: Router, private authService: AuthService, private toastController:ToastController) { }

  ngOnInit() {}

  // para los formularios
  onSubmitTemplate(){
    console.log('Form submit');
    console.log(this.user.nombre);
  }

  // metodo para iniciar sesion
  async login(){
    const isLogged = await this.authService.login(this.user.nombre, this.user.password);
    if(isLogged){
      this.router.navigate(['/home']);
      this.user.nombre ="";
      this.user.password="";
    } else {
      await this.presentToast("Usuario y/o contraseña incorrecta!!!");
    }
  }

  async presentToast(msg:string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000

    });
    toast.present();
  }

}
