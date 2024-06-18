import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DemandeService } from 'src/app/demande/demande.service';
import { AppelOffreService } from '../demande-offer.service';

@Component({
  selector: 'app-demande-offer-add',
  templateUrl: './demande-offer-add.component.html',
  styleUrls: ['./demande-offer-add.component.css']
})
export class DemandeOfferAddComponent implements OnInit {
  form:FormGroup
  demandes: any;
  message:string=''
  showError:boolean=false
  show:boolean=false
  constructor(private demandeService:DemandeService, private fb:FormBuilder,private appelOffreService:AppelOffreService ){
    this.form = this.fb.group({
      titre: [''],
      description: [''],
      ResponsableDemandeOffre: [''],
      PrixTotale: [''],
      EstimationAchat: [''],
      DossierAchat: [''],
      isValide: [false],
      dateOuverture: [''],
      dateLimite: [''],
      demandeId:[],

      active: [true]
    });
  }
  ngOnInit(): void {
     this.demandeService.getALLDemandes().subscribe(data=>{
      this.demandes=data[0]
      console.log( this.demandes)
     })
  }
  openChangeDemande(open: any) {
    this.demandes=open.model
   
      
    
    }
  submit(){
    // let offerDemande:any
    // offerDemande.titre=this.form.value.titre
    // offerDemande.description=this.form.value.description
    // offerDemande.ResponsableDemandeOffre=this.form.value.ResponsableDemandeOffre
    // offerDemande.PrixTotale=this.form.value.offerDemande
    // offerDemande.EstimationAchat=this.form.value.EstimationAchat
    // offerDemande.DossierAchat=this.form.value.DossierAchat
  
    // offerDemande.dateOuverture=this.form.value.dateOuverture
    // offerDemande.dateLimite=this.form.value.dateLimite
    // offerDemande. demandeId= this.demandes
    

  console.log(this.form.value)
    this.appelOffreService.createAppelOffre(this.form.value).subscribe(data=>{
      this.message="demande d'offer étè créer avec success"
      this.show=true
    })
  }

  }


