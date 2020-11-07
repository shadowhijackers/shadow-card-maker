import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";

import { IonicModule } from '@ionic/angular';

import { MakerPageRoutingModule } from './maker-routing.module';

import { MakerPage } from './maker.page';
import * as MakerForms from './'
import {MatStepperModule} from "@angular/material/stepper";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MakerPageRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatStepperModule
  ],
  declarations: [
    MakerPage,
    ...MakerForms.COMPONENTS
  ]
})
export class MakerPageModule {}
