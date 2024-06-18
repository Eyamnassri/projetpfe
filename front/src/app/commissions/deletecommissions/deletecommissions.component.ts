import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommissionsService } from 'src/app/commissions/commissions.service';

@Component({
  selector: 'app-deletecommissions',
  templateUrl: './deletecommissions.component.html',
  styleUrls: ['./deletecommissions.component.css']
})
export class DeletecommissionsComponent {
  @Output() closed = new EventEmitter<boolean>();
  @Input() commissionsId:number=0
  @Output() saved = new EventEmitter<boolean>();
  alertError: boolean=false;
  constructor(private  CommissionsService:CommissionsService) { }

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
  this.CommissionsService.DeleteCommissionsId(this.commissionsId).subscribe(

    (res: any) => { // Spécifier explicitement le type 'any' pour 'res'
      console.log(this.commissionsId)
      this.saved.emit(true);
    }
  );
}
close(){
  this.closed.emit(true)
}
}
