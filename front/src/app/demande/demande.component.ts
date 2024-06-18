import { Component,OnInit } from '@angular/core';
import { DemandeService } from './demande.service';

@Component({
  selector: 'app-demande',
  templateUrl: './demande.component.html',
  styleUrls: ['./demande.component.css']
})
export class DemandeComponent implements OnInit {
  demandes: any= []
  show:boolean=false
  demandId: number=0;
  checkboxItems = [
    { label: 'Demande en cours', value: 'Demande en cours' },
    { label: 'Traitement en cours', value: 'Traitement en cours' },
    { label: 'Validation de demande', value: 'Validation de demande' },
    { label: 'Autorisation sur site tuneps', value: 'Autorisation sur site tuneps' }
  ];
  demandeId=4
  role: any;
  userId:any

  constructor(private serviceDemande: DemandeService){}
  ngOnInit(): void {

    this.role = this.getCookie('role')
    this.userId=this.getCookie('userId')
    this.getAllListe()

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
  getAllListe(){
    this.serviceDemande.getALLDemandes().subscribe(data=>{
   
      console.log(this.userId)
      if(this.role=='demandeur'){
        this.demandes=data[0]
        this.demandes=this.demandes.filter((x:any)=>x.userId?.id==this.userId)
      }else{
        this.demandes=data[0]
        this.demandes=this.demandes
      }
     
      console.log(data[0])
    })
  }
  onCheckboxChanged(checkedItems:any) {
    console.log('Checked items:', checkedItems);
    // Perform any other actions here based on the checked items
  }
  saveAction(){
this.demandes=this.demandes
this.getAllListe()
this.show= false;

  }
  deleteAction(id:number){
    this.demandId=id
    this.show= true;
  }

  closeAction() {
    this.show = false;
  }  
}
