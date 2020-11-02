import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MakerPage } from './maker.page';

const routes: Routes = [
  {
    path: '',
    component: MakerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MakerPageRoutingModule {}
