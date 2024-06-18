import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DemandeComponent } from './demande.component';
import { AddDemandeComponent } from './add-demande/add-demande.component';
import { DetailDemandeComponent } from './detail-demande/detail-demande.component';
import { DeleteDemandeComponent } from './delete-demande/delete-demande.component';
import { UpdateDemandeComponent } from './update-demande/update-demande.component';
import { TraiementDemanndeComponent } from './traiement-demannde/traiement-demannde.component';
const routes: Routes = [
  { path: '', component: DemandeComponent },
  { path: 'add-demande', component: AddDemandeComponent }, // Add route for AddDemandeComponent
  { path: 'delete-demande', component: DeleteDemandeComponent }, // Add route for DeleteDemandeComponent
  { path: 'detail-demande/:id', component: DetailDemandeComponent }, // Add route for DetailDemandeComponent
  { path: 'update-demande/:id', component: UpdateDemandeComponent }, 
 {path:'traitement-demande/:id',component:TraiementDemanndeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemandeRoutingModule { }
