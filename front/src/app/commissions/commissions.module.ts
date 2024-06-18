import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommissionsRoutingModule } from './commissions-routing.module';
import { CommissionsComponent } from './commissions.component';
import { AddcommissionsComponent } from './addcommissions/addcommissions.component';
import { DeletecommissionsComponent } from './deletecommissions/deletecommissions.component';
import { DetaileecommissionsComponent } from './detaileecommissions/detaileecommissions.component';
import { UpdateeecommissionsComponent } from './updateeecommissions/updateeecommissions.component';
import { ClarityModule } from '@clr/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CommissionsComponent,
    AddcommissionsComponent,
    DeletecommissionsComponent,
    DetaileecommissionsComponent,
    UpdateeecommissionsComponent
  ],
  imports: [
    CommonModule,
    CommissionsRoutingModule,ClarityModule,ClarityModule,FormsModule,ReactiveFormsModule
  ]
})
export class CommissionsModule { }
