import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemandeOfferRoutingModule } from './demande-offer-routing.module';
import { DemandeOfferComponent } from './demande-offer/demande-offer.component';
import { DemandeOfferAddComponent } from './demande-offer-add/demande-offer-add.component';
import { DemandeOfferUpdateComponent } from './demande-offer-update/demande-offer-update.component';
import { DemandeOfferDeleteComponent } from './demande-offer-delete/demande-offer-delete.component';
import { DemandeOfferDetailComponent } from './demande-offer-detail/demande-offer-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';


@NgModule({
  declarations: [
    DemandeOfferComponent,
    DemandeOfferAddComponent,
    DemandeOfferUpdateComponent,
    DemandeOfferDeleteComponent,
    DemandeOfferDetailComponent
  ],
  imports: [
    CommonModule,
    DemandeOfferRoutingModule,FormsModule,ReactiveFormsModule,ClarityModule
  ]
})
export class DemandeOfferModule { }
