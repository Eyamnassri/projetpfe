import { Component, OnInit } from '@angular/core';
import { CachierchargeService } from '../cachiercharge.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detailcahiercharge',
  templateUrl: './detailcahiercharge.component.html',
  styleUrls: ['./detailcahiercharge.component.css']
})
export class DetailcahierchargeComponent implements OnInit {
  id: any;  
  cachier: any;
  constructor(private cachierchargeService: CachierchargeService ,private activatedRoute: ActivatedRoute)
  {}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.getCahierCharge(this.id)
  
    })
  }
getCahierCharge(id:number){
  this.cachierchargeService.getCahierChargeById(id).subscribe(data=>{
    this.cachier=data 
    console.log(data) })
}

}
