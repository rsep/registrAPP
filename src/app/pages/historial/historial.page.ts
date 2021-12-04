import { Component, OnInit } from '@angular/core';
import { AttendRecordService } from 'src/app/services/attend-record.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { IAttend } from 'src/app/interfaces/iattend';
import { IUsers } from 'src/app/interfaces/iusers';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
})
export class HistorialPage implements OnInit{
  asistencias: IAttend[]=[];

  user: Partial<IUsers>={};

  constructor(
    private router: Router, private alertCtrl: AlertController, 
    private api: AttendRecordService, private authService:AuthService) {
      this.user = this.authService.currentUser;
    }

  ionViewWillEnter() {
    console.log(this.user);
    this.getRecord();
    console.log(this.asistencias)
  }

  getRecord() {
    this.api.getRecord().subscribe((data) => {
      this.asistencias = data.filter(asistencia => asistencia.userId === this.user.id);
      //para filtrar por usuario se iguala el del json al que uno recibe de login
      this.asistencias.reverse();
    }, error=>{
      console.log(error);//error trayendo los datos
    });
  }

  ngOnInit() {
  }
  
  volver(){
    this.router.navigate(['/resumen']);
  };
}
