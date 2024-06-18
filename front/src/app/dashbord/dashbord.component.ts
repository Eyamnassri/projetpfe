import { Component, OnInit } from '@angular/core';
import { DemandeService } from '../demande/demande.service';
import { UserService } from '../user/user.service'
import { CachierchargeService } from '../cahiercharge/cachiercharge.service';
import {CommissionsService} from'../commissions/commissions.service'
import { AppelOffreService } from '../demande-offer/demande-offer.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {
sizeDemande: any;
  usersTotale: any;
  cahierchargeSize: any;
  commissionsSize: any;
  demandes: any;
  AppelOffer: any=[];
constructor(private serviceDemande: DemandeService ,private UserService:UserService ,private demandeOffer:AppelOffreService,private CahierchargeService:CachierchargeService ,private CommissionsService:CommissionsService){}
ngOnInit(): void {
  this.getAllListe()
  this.getAllUser()
  this.getAllListeCahier()
  this.getAllListeCommission()
  this.getAllListeDemandeOffer()

}

getAllListeDemandeOffer(){
  this.demandeOffer.getAllAppelOffre().subscribe((data: any[])=>{
    this.AppelOffer=data[1]
    console.log(data)
    console.log(data[0])
  })
}
getAllListe(){
  this.serviceDemande.getALLDemandes().subscribe(data=>{
    this.sizeDemande=data[1]
    this. demandes=data[0]

    console.log(data[0])
  })
}

getAllUser(){
this.UserService.getUserAll().subscribe(data=>{
  console.log((data))
  this.usersTotale=data[1]
})
}

getAllListeCahier(){
  this.CahierchargeService.getCahierCharge().subscribe((data: any[])=>{
    this.cahierchargeSize=data[1]
    console.log(data)
    console.log(data[0])
  })
}


getAllListeCommission(){
  this.CommissionsService.getCommissions().subscribe((data: any[])=>{
    this.commissionsSize=data[1]
  })
}
}
