import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { cahierchargeComponent } from './cahiercharge.component';
import { AddcahierchargeComponent } from './addcahiercharge/addcahiercharge.component';
import { DeletecahierchargeComponent } from './deletecahiercharge/deletecahiercharge.component';
import { DetailcahierchargeComponent } from './detailcahiercharge/detailcahiercharge.component';
import { UpdatecahierchargeComponent } from './updatecahiercharge/updatecahiercharge.component';
import { AffectationComponent } from './affectation/affectation.component';
const routes: Routes = [
  { path: '', component: cahierchargeComponent },
  { path: 'add-cahiercharge', component: AddcahierchargeComponent }, // Add route for AddcahierchargeComponent
  { path: 'delete-cahiercharge', component: DeletecahierchargeComponent }, // Add route for DeletecahierchargeComponent
  { path: 'detail-cahiercharge/:id', component: DetailcahierchargeComponent }, // Add route for DetailcahierchargeComponent
  { path: 'update-cahiercharge/:id', component: UpdatecahierchargeComponent }, 
  { path: 'affectation/:id', component:AffectationComponent }, 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class CahierchargeRoutingModule { }
