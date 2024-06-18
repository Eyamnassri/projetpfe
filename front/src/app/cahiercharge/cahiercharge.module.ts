import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClarityModule ,ClrStepperModule } from '@clr/angular';

import { CahierchargeRoutingModule } from './cahiercharge-routing.module';

import { AddcahierchargeComponent } from './addcahiercharge/addcahiercharge.component';
import { DeletecahierchargeComponent } from './deletecahiercharge/deletecahiercharge.component';
import { DetailcahierchargeComponent } from './detailcahiercharge/detailcahiercharge.component';
import { UpdatecahierchargeComponent } from './updatecahiercharge/updatecahiercharge.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { cahierchargeComponent } from './cahiercharge.component';
import { AffectationComponent } from './affectation/affectation.component';


@NgModule({
  declarations: [
    cahierchargeComponent,
    AddcahierchargeComponent,
    DeletecahierchargeComponent,
    DetailcahierchargeComponent,
    UpdatecahierchargeComponent,
    AffectationComponent
  ],
  imports: [
    CommonModule,ClarityModule ,ClrStepperModule,FormsModule,ReactiveFormsModule//// for each module
    ,CahierchargeRoutingModule
  ]
})
export class CahierchargeModule { }
