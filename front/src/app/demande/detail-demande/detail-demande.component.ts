import { Component } from '@angular/core';
import { User } from 'src/app/user/user';
import { DemandeService } from '../demande.service';
import { ActivatedRoute, Params } from '@angular/router';
import { EtatService } from '../etat/etat.service';

@Component({
  selector: 'app-detail-demande',
  templateUrl: './detail-demande.component.html',
  styleUrls: ['./detail-demande.component.css']
})
export class   DetailDemandeComponent {
  id: number=0;
  user:User=new User()
  demande: any;
checkboxItems = [
    { label: 'Demande en cours', value: 'Demande en cours' },
    { label: 'Traitement en cours', value: 'Traitement en cours' },
    { label: 'Validation de demande', value: 'Validation de demande' },
    { label: 'Autorisation sur site tuneps', value: 'Autorisation sur site tuneps' }
  ];
  etat: any;
  constructor(private userService:DemandeService ,private   etatService:EtatService ,private demandeService:DemandeService,private activatedRoute:ActivatedRoute){
  }
  ngOnInit(): void {

    this.activatedRoute.params.subscribe((params: Params) => {
    this.id = +params['id'];
    this.getDemande(this.id)

  })
  }

  getDemande(id:number){
    this.userService.getDemandeById(id).subscribe(data=>{
      console.log(data)
      this.demande=data
      this.demandeService.getEtatByDemande(this.demande.id).subscribe(rest=>{
        console.log(rest)
        this.etat=rest
        console.log(this.etat)      })

    })
  }
}

