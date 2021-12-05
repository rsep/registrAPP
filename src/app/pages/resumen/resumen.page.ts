import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { IAttend } from 'src/app/interfaces/iattend';
import { IUsers } from 'src/app/interfaces/iusers';
import { AttendRecordService } from 'src/app/services/attend-record.service';
import { AuthService } from 'src/app/services/auth.service';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.page.html',
  styleUrls: ['./resumen.page.scss'],
})
export class ResumenPage {
  
  today = Date.now();
  data: any; //el que recibe
  qr : any;

  user: Partial<IUsers>={ };
  asistencia: Partial <IAttend> = {
    asignatura: "",
    ramo: {
        sigla: "",
        seccion: ""
    },
    docente: "",
    correo: "",
    fecha: new Date().toDateString(),
    hora: new Date().toTimeString()
  };


  constructor(private activeRoute: ActivatedRoute, private router: Router, private alertCtrl: AlertController, 
    public toastController: ToastController, private api: AttendRecordService, 
    private authService:AuthService) {
      this.user = this.authService.currentUser;

      this.activeRoute.queryParams.subscribe(params=>{
        if(this.router.getCurrentNavigation().extras.state){
          this.data=JSON.stringify(this.router.getCurrentNavigation().extras.state.code);
          this.data = JSON.parse(this.data);
          this.qr = JSON.parse(this.data);
          console.log(this.qr["seccion"]);
          console.log("SECCION: " + this.qr["seccion"]);
          console.log("SIGLA: " + this.qr["idAsignatura"]);
        }
      });
      
     }

  ionViewWillEnter(){
    this.asistencia.asignatura = this.qr["asignatura"];
    this.asistencia.ramo.sigla = this.qr["idAsignatura"];
    this.asistencia.ramo.seccion = this.qr["seccion"];
    this.asistencia.docente = this.qr["docente"];
    this.asistencia.correo = this.qr["correo"];
    console.log("EVENTO WILL ENTER");
  }

  // ionViewDidEnter(){
  //   console.log("EVENTO DID ENTER");
  // }

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
      //mandar mail automatico
      const templateParams = {
        from_name: 'Camilo Flores + Rosario Sepulveda TEAM',
        to_name: this.qr["docente"],
        message: 'Evaluacion 3 prueba',
        el_mail: this.qr["correo"],
        fecha: new Date().toDateString(),
        hora: new Date().toTimeString()
      };
      emailjs.send("tentacles.mind@gmail.com", "template_1", templateParams, "user_7zZ871sca4dKRPFM4PD4m");
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
