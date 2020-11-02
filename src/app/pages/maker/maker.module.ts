import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MakerPageRoutingModule } from './maker-routing.module';

import { MakerPage } from './maker.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MakerPageRoutingModule
  ],
  declarations: [MakerPage]
})
export class MakerPageModule {}
