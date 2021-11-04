import { Injectable } from '@angular/core';

// importar el toastController
import { ToastController } from '@ionic/angular';
// importar el storage
import { Storage } from '@ionic/storage-angular';
// importar la interfaz usuarios
import { Datos, Usuarios } from '../interfaces/usuarios';
import { Status } from '../interfaces/status';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // crear colección vacía
  usuarios: Usuarios[]= [];
  estadoUsuario: Status[] = [];
  datos: Datos[] = []; // el user será el key de acceso a nombr,mail

  private _storage: Storage | null = null;

  constructor(private storage: Storage,
              public toastCtrl: ToastController){
    this.init();
    this.cargarUsuarios();
    this.cargarDatosUsuarios();
    this.cargarEstado();
  }

  // metodo asincrono para cargar usuarios
  async cargarUsuarios(){
    const usuario = await this.storage.get('usuarios')
    if (usuario){ // Si el localStorage tiene los datos, los asignará a la colección data creada.
      this.usuarios = usuario;
      // console.log(usuario);
    }
  }

  // CHANGE 27 OCT
  // metodo asincrono para cargar datos de usuarios
  async cargarDatosUsuarios(){
    const datosUsuario = await this.storage.get('datos')
    if (datosUsuario){ // Si el localStorage tiene los datos, los asignará a la colección data creada.
      this.datos = datosUsuario;
      // console.log(usuario);
    }
  }

  // CHANGE 27 OCT
  // metodo asincrono para cargar datos de usuarios
  async cargarEstado(){
    const st = await this.storage.get('estadoUsuario')
    if (st){ // Si el localStorage tiene los datos, los asignará a la colección data creada.
      this.estadoUsuario = st;
      console.log(st);
    }
  }

  // metodo para guardar un usuario, que recibe un nombre y numero como parametros (especificar el datatype)
  guardarUsuario(nombre: string, password: string){
    const existe = this.usuarios.find(c => c.user === nombre);
    if (!existe){
      this.usuarios.unshift({user: nombre,
                          password: password});
      // setter en la Bd, en el storage
      this._storage.set('usuarios',this.usuarios); //seteo nombre del registro
    }
  }

  // CHANGE 27 OCT
  // metodo para guardar datos de un usuario, que recibe un nombre y numero como parametros (especificar el datatype)
  guardarDatosUsuario(name: string, email: string, user: string){
    const existe = this.datos.find(c => c.user === user);
    if (!existe){
      this.datos.unshift({name: name,
                          email: email,
                          user: user});
      // setter en la Bd, en el storage
      this._storage.set('datos',this.datos); //seteo nombre del registro
    }
  }

  // // CHANGE 26 OCT
  // // metodo que guarda usuario activo
  // guardarActivo(nombre: string) {
  //   this.estado = this.estado.filter(c => c.user === nombre);
  //     this._storage.set('estado', {user: nombre,
  //       estado: 1});
  // }


  // // metodo para guardar un usuario, que recibe un nombre y numero como parametros (especificar el datatype)
  // guardarActivo(nombre: string, num: number){
  //   // setter en la Bd, en el storage
  //   this.estadoUsuario.estado = num;
  //   this.estadoUsuario.user = nombre;
  //   this._storage.set('estado',this.estadoUsuario); //seteo nombre del registro
  // }

  // /* PARA RESPALDO */
  // // metodo para guardar un usuario, que recibe un nombre y numero como parametros (especificar el datatype)
  // guardarActivo(nombre: string, estado: number){
  //   const existe = this.estadoUsuario.find(c => c.user === nombre);
  //   if (!existe){
  //     this.estadoUsuario.unshift({user: nombre,
  //                         estado: estado});
  //     // setter en la Bd, en el storage
  //     this._storage.set('estado',this.estadoUsuario); //seteo nombre del registro
  //   }
  // }
  



  // metodo para guardar un usuario, que recibe un nombre y numero como parametros (especificar el datatype)
  guardarActivo(nombre: string, estado: number){
      // setter en la Bd, en el storage
      this._storage.set('estado',{user: nombre,
        estado: estado}); //seteo nombre del registro
  }
  

 
  // CHANGE 26 OCT
  // metodo que desactiva usuario activo y lo deja desactivo
  desactivarUser(nombre: string) {
    this.estadoUsuario = this.estadoUsuario.filter(c => c.user === nombre);
    this._storage.set('estado', {user: nombre,
      estado: 0});
  }
  


  
  // async mostrarEstado(){
  //   const estadoUser = await this.storage.get('estado')
  //   if (estadoUser){ // Si el localStorage tiene los datos, los asignará a la colección data creada.
  //     this.estado = estadoUser;
  //     // console.log(estadoUser);
  //   }
  // }
  


  /*
  // CHANGE 27 OCT
  mostrarDatos(user: string){
    const existe = this.datos.filter(c => c.user === user);
    this.storage.get('datos');
    console.log(this.datos);
  }
  */

  // metodo init que va a crear el storage
  async init() {
    console.log('INIT');
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    this._storage = storage;
    console.log('DONE');
  }

  // metodo toast (EVALUAR SI ES NECESARIO!!!)
  async presentToast(mensaje: string){
    const toast = await this.toastCtrl.create({
      message: mensaje,
      translucent: true,
      color: 'medium',
      position: 'top',
      duration: 2000
    });
    toast.present();
  }

}
