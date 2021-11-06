import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { IAttend } from 'src/app/interfaces/iattend';
import { IUsers } from 'src/app/interfaces/iusers';
import { AttendRecordService } from 'src/app/services/attend-record.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.page.html',
  styleUrls: ['./resumen.page.scss'],
})
export class ResumenPage {
  
  today = Date.now();
  data: any; //el que recibe

  user: Partial<IUsers>={ };
  asistencia: Partial <IAttend> = {
    ramo: {
        sigla: "",
        seccion: ""
    },
    fecha: new Date().toDateString(),
    hora: new Date().toTimeString()
  };

  constructor(private activeRoute: ActivatedRoute, private router: Router, private alertCtrl: AlertController, 
    public toastController: ToastController, private api: AttendRecordService, 
    private authService:AuthService) {
      this.user = this.authService.currentUser;

      this.activeRoute.queryParams.subscribe(params=>{
        if(this.router.getCurrentNavigation().extras.state){
          this.data=this.router.getCurrentNavigation().extras.state.code;
        }
      });
     }


  
  ionViewWillEnter(){
    console.log('RESUMEN PAGE:' + this.data);
    this.asistencia.ramo.sigla = this.data;
    console.log("EVENTO WILL ENTER");
  }


  ionViewDidEnter(){
    console.log("EVENTO DID ENTER");
  }

  volver(){
    this.router.navigate(['/home']);
  }

  Record(){
    this.router.navigate(['/historial']);
  }

  confirmAttend(){
    if (this.asistencia.id==null){
      this.asistencia.userId = this.user?.id;
      this.api.createRecord(this.asistencia).subscribe(
        ()=>{
          this.presentToast("Asistencia confirmada!!")
          this.asistencia.id=1;
          return;
        },
        error=>{
          this.presentToast("Error - " + error)
        }
      );
    }else {
      this.presentToast("Ya se encuentra presente")
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
