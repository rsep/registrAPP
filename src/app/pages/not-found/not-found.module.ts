import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotFoundPageRoutingModule } from './not-found-routing.module';

import { NotFoundPage } from './not-found.page';

import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { HeaderComponent } from 'src/app/components/header/header.component';

// Note we need a separate function as it's required
// by the AOT compiler.
export function playerFactory() {
  return player;
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotFoundPageRoutingModule,
    LottieModule.forRoot({ player: playerFactory })
  ],
  declarations: [NotFoundPage, HeaderComponent]
})
export class NotFoundPageModule {}
