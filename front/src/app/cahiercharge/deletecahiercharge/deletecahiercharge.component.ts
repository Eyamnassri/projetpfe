import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from 'express';
import { CachierchargeService } from '../cachiercharge.service';

@Component({
  selector: 'app-deletecahiercharge',
  templateUrl: './deletecahiercharge.component.html',
  styleUrls: ['./deletecahiercharge.component.css']
})
export class DeletecahierchargeComponent {
  @Output() closed = new EventEmitter<boolean>();
  @Input() cahierchargeId:number=0
  @Output() saved = new EventEmitter<boolean>();
  alertError: boolean=false;
  constructor(private cahierchargeservice:CachierchargeService) { }

  ngOnInit(): void {
  }
//   save(){
//     this.cahierchargeService.DeletecahierchargeId(this.cahierchargeId).subscribe(
//       retour=>{
//         this.saved.emit(true)
//         this.closed.emit(true);    
//         this.router.navigate(['/cahiercharge/'])
//       },
//       err => {
//       console.error('Observer got an error: ' + err)
//       this.alertError=true
//       },
//       () => this.saved.emit(true)
//     )
// }
save() {
  this.cahierchargeservice.DeleteCahierChargeId(this.cahierchargeId).subscribe(
    (res: any) => { // Spécifier explicitement le type 'any' pour 'res'
      this.saved.emit(true);
    }
  );
}


closeAction() {
  this.closed.emit(true);
}

}

