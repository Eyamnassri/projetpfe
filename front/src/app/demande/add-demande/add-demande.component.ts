import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ArticleService } from 'src/app/article/article.service';
import { DemandeService } from '../demande.service';
import { EtatService } from '../etat/etat.service';
import { EtatDemande } from '../etat/etat';
import { Etat } from '../etat';

@Component({
  selector: 'app-add-demande',
  templateUrl: './add-demande.component.html',
  styleUrls: ['./add-demande.component.css']
})
export class AddDemandeComponent {
  form:FormGroup
  artilces: any;
  show: boolean=false;
  message: string='';
  showError: boolean=false;
  userId: string | null='';
  // BuyingOrder = new BuyingOrder();
  etat:Etat = new Etat()
  constructor(private fb:FormBuilder ,private   etatService:EtatService, private articleService:ArticleService , private demandeService:DemandeService ){
    this.form = this.fb.group({
      titre: ['', Validators.required],
        description: ['', Validators.required],
        type: ['', Validators.required],
        price: ['', Validators.required],
        responsable: [''],
        dateRealisation: [''],
        fichierCPT: ['']
      
    })
}
ngOnInit(){
  this.userId=this.getCookie('userId')

}
 getALlArticle(){
  this.articleService.getALLArticle().subscribe(data=>{
    console.log(data)
    this.artilces=data[0]
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
 submit(){console.log( this.form.value)

  this.demandeService.creatDemandes(this.form.value).subscribe((data:any)=>{
    console.log('data ' ,data)
    this.show=true
    this.message=' demande ajoutée avec success'
    this.etat.libelleEtat="Demande crée"
    this.etat.codeEtat="Demande en cours"
    this.etat.demandeId =data.id
    this.etatService.create(this.etat).subscribe(data=>{
      console.log("etat",data)
    })
   
    
  },error=>{
    this.showError=true
    this.message="n'est pas enregister le demande "

  })


 }
}