import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

// importar servicio de la Base de Datos de usuarios
import { DataService } from 'src/app/services/data.service';

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

  constructor(private router: Router, 
              private dataService: DataService, 
              public toastCtrl: ToastController,
              private alertCtrl: AlertController) { }

  ngOnInit() {}

  // es el que está antes de cargarse la pagina
  ionViewWillEnter(){
    this.dataService.guardarUsuario('Girasol', '1234');
    this.dataService.guardarUsuario('Shopp', '4562');
    this.dataService.guardarUsuario('Luis', '7891');
    this.dataService.guardarUsuario('bestia', '6662');
    this.dataService.guardarUsuario('marco', '8784');
    this.dataService.guardarUsuario('aaaa', '6667');

    // console.log(this.dataService.datos.length);
    // this.dataService.cargarUsuarios();

    // CHANGE 27 OCT
    this.dataService.guardarDatosUsuario('Rosario', 'rosario@gm.com', 'Girasol');
    this.dataService.guardarDatosUsuario('Lucas', 'lucfilms@gm.com', 'Shopp');
    this.dataService.guardarDatosUsuario('Luis Reyes', 'lucho@gm.com', 'Luis');
    this.dataService.guardarDatosUsuario('Jorge', 'metal@gm.com', 'bestia');
    this.dataService.guardarDatosUsuario('Marc Ossa', 'mo@gm.com', 'marco');
    this.dataService.guardarDatosUsuario('Anita Alice', 'aa@gm.com', 'aaaa');

    
    // this.dataService.cargarDatosUsuarios();
    this.dataService.guardarActivo('',0);
    /*
    if(this.dataService.estadoUsuario[0]){
      this.dataService.estadoUsuario[0].user = "hola";
      console.log(this.dataService.estadoUsuario[0].user);
    }*/
  }

  // para los formularios
  onSubmitTemplate(){
    console.log('Form submit');
    console.log(this.user.nombre);
  }

  // metodo para iniciar sesion
  login(){
    var userSucces = false;
      for (let i = 0; i < this.dataService.usuarios.length; i++) {
        var validUser = this.dataService.usuarios[i].user == this.user.nombre;
        var validPass = this.dataService.usuarios[i].password == this.user.password;

        if (validUser && validPass){
          // usuario valido
          this.dataService.guardarActivo('',0);
          userSucces = true;
          console.log("Usuario OK");
          // console.log(this.dataService.estadoUsuario[0].user);
          // this.dataService.estadoUsuario[0].user = this.user.nombre;
          // console.log(this.dataService.estadoUsuario[0].user);
          // this.dataService.estadoUsuario[0].estado = 1;

          // navegacion angular
          let navigationExtras: NavigationExtras={
            state:{ user: this.user.nombre}
          }
          this.router.navigate(['/home'], navigationExtras)
          this.user.nombre ="";
          this.user.password="";  
        }
      }
      if (!userSucces){
        console.log("Usuario FALSO");
        this.presentToast("ERROR: Debe ingresar un usuario registrado!!");
      }

      

      // this.dataService.mostrarDatos(this.user.nombre);


      // console.log(this.dataService.datos.length);
      // console.log(this.dataService.datos[0].user); //obtener info de bd
      // console.log(this.user.nombre); // obtener info actual
      // console.log(this.user.password);

      // guardar ingreso en la indexedDB
      // this.dataService.guardarUsuario(this.user.nombre, this.user.password);

      //27 OCT console.log(this.dataService.datos[0].name);
  }


  // present toast
  async presentToast(msg:string){
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 4000
    });
    toast.present();
  }

}
