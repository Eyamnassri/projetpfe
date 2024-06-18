import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { CommissionsService } from 'src/app/commissions/commissions.service';

@Component({
  selector: 'app-updateeecommissions',
  templateUrl: './updateeecommissions.component.html',
  styleUrls: ['./updateeecommissions.component.css']
})
export class UpdateeecommissionsComponent {
  id: any
  form:any
  show: boolean=false;
  message: string='';
  showError: boolean=false;
  constructor(private fb:FormBuilder , private CommissionsService:CommissionsService   ,private activatedRoute: ActivatedRoute)
{}
ngOnInit(): void {
  this.activatedRoute.params.subscribe((params: Params) => {
    this.id = +params['id'];
    this.getCommissions(this.id)

  })
 }
 getCommissions(id:number){
  this.CommissionsService.getCommissionsById(id).subscribe(data=>{
    console.log(data)
    this.form = this.fb.group({
      
      // titre: [data.titre:, Validators.required],
        description: [data.description, Validators.required],
        dateCommissions:[''],
        nomberJury:[data.nomberJury]
       
      
    })
  })
  
 }
 submit(){
  console.log(this.form.value)
  this.CommissionsService.PatchCommissions(this.id,this.form.value).subscribe
  (data=>{
    console.log(this.form.value)
    console.log('data ' ,data)
    this.show=true
    this.message=' commissions ajoutée avec success'
  },error=>{
    this.showError=true
    this.message="n'est pas enregister le commissions "

  })
 }


}
