import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashbordRoutingModule } from './dashbord-routing.module';
import { DashbordComponent } from '../dashbord/dashbord.component';
import { ClarityModule } from '@clr/angular';
import { RouterModule } from '@angular/router';
import { DemandeModule } from '../demande/demande.module';
import { UserModule } from '../user/user.module';
import { CahierchargeModule } from '../cahiercharge/cahiercharge.module';
import { CommissionsModule } from '../commissions/commissions.module';

@NgModule({
  declarations: [
    DashbordComponent
  ],
  imports: [
    CommonModule,
    DashbordRoutingModule,ClarityModule,RouterModule,DemandeModule,UserModule,CahierchargeModule,CommissionsModule

  ]
})
export class DashbordModule { }
