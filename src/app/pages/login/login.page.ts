import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

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

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmitTemplate(){
    console.log('Form submit');
    console.log(this.user.nombre);
  }

  // metodo para iniciar sesion
  login(){
    let navigationExtras: NavigationExtras={
      state:{ user: this.user.nombre}
    }
    this.router.navigate(['/home'], navigationExtras)
    this.user.nombre ="";
    this.user.password="";
  }

}
