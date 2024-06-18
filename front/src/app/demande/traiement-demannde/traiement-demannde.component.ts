import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { DemandeService } from '../demande.service';

@Component({
  selector: 'app-traiement-demannde',
  templateUrl: './traiement-demannde.component.html',
  styleUrls: ['./traiement-demannde.component.css']
})
export class TraiementDemanndeComponent {
  id: number=0;
  form:FormGroup;
  show: boolean=false;
  message: string='';
  showError: boolean=false;
  role: string | null='';
  constructor(private fb:FormBuilder , private demandeService:DemandeService  ,private activatedRoute: ActivatedRoute)
  {
    this.form = this.fb.group({
      
      titre: [{ value: '', disabled: true }],
        description: [{ value: '', disabled: true }],
        active: [false],
        type: [{ value: '', disabled: true }],
        articleId: [{ value: '', disabled: true }],
        price: [{ value: '', disabled: true }],
        responsable: [{ value: '', disabled: true }],
        dateRealisation: [{ value: '', disabled: true }],
        fichierCPT: [{ value: '', disabled: true }]
      
    })
  }
  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.getDemande(this.id)
  
    })
    this.role = this.getCookie('role');
    console.log('thisrole',this.role)

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
   getDemande(id:number){
    this.demandeService.getDemandeById(id).subscribe((data:any)=>{
      console.log(data)
      this.form.patchValue(data)
    })

    
   }
   
   submit(){
    this.demandeService.PatchDemandes(this.form.value,this.id).subscribe
    (data=>{
      console.log('data ' ,data)
      this.show=true
      this.message=' demande ajoutée avec success'
    },error=>{
      this.showError=true
      this.message="n'est pas enregister le demande "
  
    })
   }

}
