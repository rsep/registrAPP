import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from 'src/app/components/header/header.component';

import { ResumenPage } from './resumen.page';

const routes: Routes = [
  {
    path: '',
    component: ResumenPage,
    children: [
      {
        path: 'uno',
        component: HeaderComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResumenPageRoutingModule {}
