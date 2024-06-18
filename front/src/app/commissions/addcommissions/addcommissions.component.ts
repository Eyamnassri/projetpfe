import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommissionsService } from 'src/app/commissions/commissions.service';

@Component({
  selector: 'app-addcommissions',
  templateUrl: './addcommissions.component.html',
  styleUrls: ['./addcommissions.component.css']
})
export class AddcommissionsComponent {
  form:FormGroup
  cahiercharge: any;
  show: boolean=false;
  message: string='';
  showError: boolean=false;
  constructor(private fb:FormBuilder , private CommissionsService:CommissionsService  ){
    this.form = this.fb.group({
      titre: ['', Validators.required],
      description: ['', Validators.required],
      dateCommissions:[''],
      nomberJury:['']
     
      
  })
}

 submit(){console.log( this.form.value);
  this.CommissionsService.creatCommissions(this.form.value).subscribe((data: any) =>{
this.show=true
this.message='Commissions ajoutée avec success';
  }),(error:any)=>{
    this.showError=true
    this.message="n'est pas enregister le Commissions"
  }
}

}
