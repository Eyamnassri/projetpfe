import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CachierchargeService } from '../cachiercharge.service';

import { ClarityModule ,ClrStepperModule } from '@clr/angular';
import { DemandeService } from 'src/app/demande/demande.service';

@Component({
  selector: 'app-addcahiercharge',
  templateUrl: './addcahiercharge.component.html',
  styleUrls: ['./addcahiercharge.component.css']
})
export class AddcahierchargeComponent implements OnInit {
  form:FormGroup
  cahiercharge: any;
  show: boolean=false;
  message: string='';
  showError: boolean=false;
  demandes: any;
  demande:number=0
  constructor(private fb:FormBuilder , private cahierChargeService:CachierchargeService,private demandeService:DemandeService ){
    this.form = this.fb.group({
      titre: ['', Validators.required],
      description: ['', Validators.required],
      type: ['', Validators.required],
      autorisation1: ['au cours', Validators.required],
      autorisation2: ['au cours', Validators.required],
      isValide: [false, Validators.required],
      documentName: [],
      demandeId:['']
      
  })
}
onFileSelected(event: any) {
  const file: File = event.target.files[0];

//   this.fileUploadService.uploadFile(file).subscribe(
//     (response) => {
//       console.log('Document uploaded successfully');
//       // Handle success response as needed
//     },
//     (error) => {
//       console.error('Error uploading document:', error);
//       // Handle error response as needed
//     }
//   );

 }
 openChange(open: any) {
  console.log(open.model?.id)
this.demande =open.model?.id
}
ngOnInit(): void {
  this.demandeService.getALLDemandes().subscribe(data=>{
    this.demandes=data[0]
  })
  
}
 getCookie(name: string): string | null {
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

 submit(){
    this.form.get('demandeId')?.setValue(this.demande);
    console.log( this.form.value);

  this.cahierChargeService.creatCahierCharge(this.form.value).subscribe((data: any) =>{
this.show=true
this.message='CahierCharge ajoutée avec success';
  }),(error:any)=>{
    this.showError=true
    this.message="n'est pas enregister le CahierCharge"
  }
}
}
  //   console.log('data ' ,data)
  //   this.show=true
  //   this.message='CahierCharge ajoutée avec success';
  // }), (error: any) => ({
  //   this.showError=true
  //   this.message="n'est pas enregister le CahierCharge ";

  // })

 

