import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EtatRoutingModule } from './etat-routing.module';
import { EtatComponent } from './etat.component';
import { AddEtatComponent } from './add-etat/add-etat.component';
import { ClarityModule } from '@clr/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EtatComponent,
    AddEtatComponent,
  ],
  imports: [
    CommonModule,
    EtatRoutingModule,ClarityModule,FormsModule,ReactiveFormsModule
  ],exports:[   EtatComponent,
    AddEtatComponent,]
})
export class EtatModule { }
