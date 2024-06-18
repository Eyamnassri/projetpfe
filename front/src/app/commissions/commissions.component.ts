import { Component } from '@angular/core';
import { CommissionsService } from './commissions.service';

@Component({
  selector: 'app-commissions',
  templateUrl: './commissions.component.html',
  styleUrls: ['./commissions.component.css']
})
export class CommissionsComponent {
  commissions: any= []
  show:boolean=false
  commissionsId: number=0;
  serviceCommissions: any;
  constructor(private CommissionsService:CommissionsService){}
  ngOnInit(): void {
    this.getAllListe()

  }
  getAllListe(){
    this.CommissionsService.getCommissions().subscribe((data: any[])=>{
      this.commissions=data[0]
      console.log(data)
      console.log(data[0])
    })
  }
  saveAction(){
this.commissions=this.commissions
this.show = false;
this.getAllListe()
  }
  deleteAction(id:number){
    this.commissionsId=id
    this.show= true;
  }

  closeAction() {
    this.show = false;
  }  

}
