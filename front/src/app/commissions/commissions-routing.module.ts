import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommissionsComponent } from './commissions.component';
import { AddcommissionsComponent } from './addcommissions/addcommissions.component';
import { DeletecommissionsComponent } from './deletecommissions/deletecommissions.component';
import { DetaileecommissionsComponent } from './detaileecommissions/detaileecommissions.component';
import { UpdateeecommissionsComponent } from './updateeecommissions/updateeecommissions.component';

const routes: Routes = [
  { path: '', component: CommissionsComponent },
  { path: 'add-Commissions', component:  AddcommissionsComponent }, // Add route for AddCommissionsComponent
  { path: 'delete-Commissions', component: DeletecommissionsComponent}, // Add route for DeleteCommissionsComponent
  { path: 'detail-Commissions', component: DetaileecommissionsComponent }, // Add route for DetailCommissionsComponent
  { path: 'update-Commissions/:id', component: UpdateeecommissionsComponent }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommissionsRoutingModule { }
