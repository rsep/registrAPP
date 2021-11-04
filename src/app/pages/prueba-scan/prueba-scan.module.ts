import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PruebaScanPageRoutingModule } from './prueba-scan-routing.module';

import { PruebaScanPage } from './prueba-scan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PruebaScanPageRoutingModule
  ],
  declarations: [PruebaScanPage]
})
export class PruebaScanPageModule {}
