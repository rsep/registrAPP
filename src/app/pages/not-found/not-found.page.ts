import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { AnimationController } from '@ionic/angular';
import { AnimationOptions } from 'ngx-lottie'; //lottie
import {Location} from '@angular/common'; //para activar last-pag

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.page.html',
  styleUrls: ['./not-found.page.scss'],
})
export class NotFoundPage implements OnInit {

  @ViewChild('animar',{read:ElementRef, static:true}) animar: ElementRef
  @ViewChild('animar2',{read: ElementRef, static:true}) animar2: ElementRef


  constructor(private animationCtrl: AnimationController, private location: Location) { }
  
  ngOnInit() {
  }

  // lottie
  options: AnimationOptions = {
    path: 'assets/7.json'
  }

  ngAfterViewInit(){
    const anim01 = this.animationCtrl
      .create()
      .addElement(this.animar.nativeElement)
      .duration(3500)
      // .iterations(Infinity)
      .fromTo('transform', 'translateX(-30px)', 'translateX(8px)')
      .easing('ease')
      .fromTo('opacity', '0.2', '1');

      // animacion imagen lottie
      const anim02 = this.animationCtrl
      .create()
      .addElement(this.animar2.nativeElement)
      .iterations(1)
      .duration(1200)
      .keyframes([
        { offset: 0, transform: 'scale(1))', opacity: '0'},
        { offset: 0.5, transform: 'scale(0)', opacity: '0.8'},
        { offset: 0.8, transform: 'scale(0)', opacity: '0.5'}
      ]);

      // agrupar animaciones con método de ionic (grouped animations)
      const animaciones = this.animationCtrl
      .create()
      .duration(500)
      .iterations(Infinity)
      .addAnimation([anim01, anim02]);

      animaciones.play()
  }

    // método para volver a locación previa
    back() {
      this.location.back();
    }

}
