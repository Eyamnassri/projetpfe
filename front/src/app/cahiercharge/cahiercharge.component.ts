import { Component, OnInit } from '@angular/core';

import { CachierchargeService } from './cachiercharge.service';


@Component({
  selector: 'app-cahiercharge',
  templateUrl: './cahiercharge.component.html',
  styleUrls: ['./cahiercharge.component.css']
})
export class cahierchargeComponent implements OnInit {
  cahiercharge: any= []
  show:boolean=false
  cahierchargeId: number=0;
  serviceCahierCharge: any;
  cachier: any;
  role: string | null='';
  constructor(private CahierchargeService:CachierchargeService){}
  ngOnInit(): void {
    this.getAllListe()

  }
  getAllListe(){
    this.CahierchargeService.getCahierCharge().subscribe((data: any[])=>{
      this.cahiercharge=data[0]
      console.log(data)
    })
    this.role = this.getCookie('role');

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
  saveAction(){
this.cahiercharge=this.cahiercharge
this.show = false;
this.getAllListe()
  }
  deleteAction(id:number){
    this.cahierchargeId=id
    this.show= true;
  }
  valideAction(id:number){
    
    this.CahierchargeService.getCahierChargeById(id).subscribe(data=>{
      this.cachier=data
    })
    this.cachier.isValide=true
    this.serviceCahierCharge.PatchCahierCharge(this.cachier,id).subscribe()
  }

  closeAction() {
    this.show = false;
  }  
}
