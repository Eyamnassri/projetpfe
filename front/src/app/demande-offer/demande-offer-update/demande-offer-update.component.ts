import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DemandeService } from 'src/app/demande/demande.service';
import { AppelOffreService } from '../demande-offer.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-demande-offer-update',
  templateUrl: './demande-offer-update.component.html',
  styleUrls: ['./demande-offer-update.component.css']
})
export class DemandeOfferUpdateComponent {
  form:FormGroup
  demandes: any;
  message:string=''
  showError:boolean=false
  show:boolean=false
  role: string|null='';
  id: number=0;
  constructor(private demandeService:DemandeService, private fb:FormBuilder,private appelOffreService:AppelOffreService , private activatedRoute: ActivatedRoute ){
    this.form = this.fb.group({
      titre: [{ value: '', disabled: true }],
      description: [{ value: '', disabled: true }],
      ResponsableDemandeOffre: [{ value: '', disabled: true }],
      PrixTotale: [{ value: '', disabled: true }],
      EstimationAchat: [{ value: '', disabled: true }],
      DossierAchat: [{ value: '', disabled: true }],
      isValide: [],
      dateOuverture: [{ value: '', disabled: true }],
      dateLimite: [{ value: '', disabled: true }],
      demandeId:[{ value: '', disabled: true }],

      active: [true]
    });
  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.getDemande(this.id)
  
    })
    this.role = this.getCookie('role');
    console.log('thisrole',this.role)
   
  }
  getDemande(id:number){
    this.appelOffreService.getAppelOffreById(id).subscribe((data:any)=>{
      console.log(data)
      this.form.patchValue(data)
    })

    
   }
   getCookie(name:any) {
    const cookieString = document.cookie;
    const cookies = cookieString.split('; ');

    for (let cookie of cookies) {
        const [cookieName, cookieValue] = cookie.split('=');
        if (cookieName === name) {
            return cookieValue;
        }
    }

    return null;
}
  openChangeDemande(open: any) {
  
   
      
    
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
      this.appelOffreService.updateAppelOffre(this.id,this.form.value).subscribe(data=>{
        this.message="demande d'offer étè valide  avec success"
        this.show=true
      })
    }

}
