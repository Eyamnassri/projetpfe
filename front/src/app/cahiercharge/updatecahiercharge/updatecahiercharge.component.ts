import { Component } from '@angular/core';
import { CachierchargeService } from '../cachiercharge.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-updatecahiercharge',
  templateUrl: './updatecahiercharge.component.html',
  styleUrls: ['./updatecahiercharge.component.css']
})
export class UpdatecahierchargeComponent {
  id: any
  form:FormGroup
  show: boolean=false;
  message: string='';
  showError: boolean=false;
  constructor(private fb:FormBuilder , private cachierchargeService:CachierchargeService , private cahierchargeService:CachierchargeService  ,private activatedRoute: ActivatedRoute)
{
  this.form = this.fb.group({
    titreDoc: ['', Validators.required],
    description: ['', Validators.required],
    typeDocument: ['', Validators.required],
    isValide: ['', Validators.required],
    documentName: [],
    

  
})
}
ngOnInit(): void {
  this.activatedRoute.params.subscribe((params: Params) => {
    this.id = +params['id'];
    this.getCahierCharge(this.id)

  })
 }
 
 getCahierCharge(id:number){
  this.cachierchargeService.getCahierChargeById(id).subscribe(data=>{
    this.form.patchValue(data)

      
    })
  
  
 }
 submit(){
  this.cachierchargeService.PatchCahierCharge(this.id,this.form.value).subscribe
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

  



