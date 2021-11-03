import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PruebaScanPage } from './prueba-scan.page';

const routes: Routes = [
  {
    path: '',
    component: PruebaScanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PruebaScanPageRoutingModule {}
