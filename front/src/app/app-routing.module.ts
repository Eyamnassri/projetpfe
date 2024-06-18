import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',loadChildren:()=>import('./dashbord/dashbord.module').then(m=>m.DashbordModule)},
  {path:'auth',loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule)},
  {path:'user',loadChildren:()=>import('./user/user.module').then(m=>m.UserModule)},
  {path:'demande',loadChildren:()=>import('./demande/demande.module').then(m=>m.DemandeModule)},
  {path:'article',loadChildren:()=>import('./article/article.module').then(m=>m.ArticleModule)},
  {path:'cahiercharge',loadChildren:()=>import('./cahiercharge/cahiercharge.module').then(m=>m.CahierchargeModule)},
  {path:'commission',loadChildren:()=>import('./commissions/commissions.module').then(m=>m.CommissionsModule)},
  {path:'demande-offer',loadChildren:()=>import('./demande-offer/demande-offer.module').then(m=>m.DemandeOfferModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
