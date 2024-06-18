import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/article/article.service';
import { DemandeService } from '../demande.service';
import { ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-demande',
  templateUrl: './update-demande.component.html',
  styleUrls: ['./update-demande.component.css']
})
export class UpdateDemandeComponent implements OnInit {
  id: any
  form:any
  show: boolean=false;
  message: string='';
  showError: boolean=false;
  constructor(private fb:FormBuilder , private articleService:ArticleService , private demandeService:DemandeService  ,private activatedRoute: ActivatedRoute)
{}
ngOnInit(): void {
  this.activatedRoute.params.subscribe((params: Params) => {
    this.id = +params['id'];
    this.getDemande(this.id)

  })
 }
 getDemande(id:number){
  this.demandeService.getDemandeById(id).subscribe(data=>{
    console.log(data)
    this.form = this.fb.group({
      
      titre: [data.titre, Validators.required],
        description: [data.description, Validators.required],
        type: [data.type, Validators.required],
        // articleId: ['', Validators.required],
        price: [data.price, Validators.required],
        responsable: [data.responsable],
        // dateRealisation: [data.dateRealisation],
        fichierCPT: [data.fichierCPT]
      
    })
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
