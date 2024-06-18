import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemandeRoutingModule } from './demande-routing.module';
import { DemandeComponent } from './demande.component';
import { AddDemandeComponent } from './add-demande/add-demande.component';

import { DeleteDemandeComponent } from './delete-demande/delete-demande.component';
import { UpdateDemandeComponent } from './update-demande/update-demande.component';
import { ClarityModule, ClrIconModule, ClrStepperModule } from '@clr/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EtatModule } from './etat/etat.module';
import { DetailDemandeComponent } from './detail-demande/detail-demande.component';
import { TraiementDemanndeComponent } from './traiement-demannde/traiement-demannde.component';


@NgModule({
  declarations: [
    DemandeComponent,
    AddDemandeComponent,
    DetailDemandeComponent,
    DeleteDemandeComponent,
    UpdateDemandeComponent,
    TraiementDemanndeComponent
  ],
  imports: [
    CommonModule,
    DemandeRoutingModule,ClarityModule,ClrIconModule,FormsModule,ReactiveFormsModule,ClrStepperModule,EtatModule
  ]
})
export class DemandeModule { }
