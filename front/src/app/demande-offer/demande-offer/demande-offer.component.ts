import { Component } from '@angular/core';
import { AppelOffreService } from '../demande-offer.service';

@Component({
  selector: 'app-demande-offer',
  templateUrl: './demande-offer.component.html',
  styleUrls: ['./demande-offer.component.css']
})
export class DemandeOfferComponent {
  AppelOffer: any;
  show: boolean=false;
  appelOfferId: number=0;

  constructor(private demandeOffer:AppelOffreService){}
  ngOnInit(): void {
    this.getAllListe()

  }
  getAllListe(){
    this.demandeOffer.getAllAppelOffre().subscribe((data: any[])=>{
      this.AppelOffer=data[0]
      console.log(data)
      console.log(data[0])
    })
  }
  saveAction(){
this.show = false;
this.getAllListe()
  }
  deleteAction(id:number){
    this.appelOfferId=id
    this.show= true;
  }

  closeAction() {
    this.show = false;
  }  
}
