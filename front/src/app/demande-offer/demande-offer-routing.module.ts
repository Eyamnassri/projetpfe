import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemandeOfferComponent } from './demande-offer/demande-offer.component';
import { DemandeOfferAddComponent } from './demande-offer-add/demande-offer-add.component';
import { DemandeOfferUpdateComponent } from './demande-offer-update/demande-offer-update.component';
import { DemandeOfferDeleteComponent } from './demande-offer-delete/demande-offer-delete.component';
import { DemandeOfferDetailComponent } from './demande-offer-detail/demande-offer-detail.component';

const routes: Routes = [
  { path: '', component: DemandeOfferComponent },
  { path: 'add-DemandeOffer', component:  DemandeOfferAddComponent }, // Add route for AddDemandeOfferComponent
  { path: 'delete-DemandeOffer', component: DemandeOfferDeleteComponent}, // Add route for DeleteDemandeOfferComponent
  { path: 'detail-DemandeOffer', component: DemandeOfferDetailComponent }, // Add route for DetailDemandeOfferComponent
  { path: 'valide-DemandeOffer/:id', component: DemandeOfferUpdateComponent}, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemandeOfferRoutingModule { }
