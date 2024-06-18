import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DemandeService } from '../demande.service';

@Component({
  selector: 'app-delete-demande',
  templateUrl: './delete-demande.component.html',
  styleUrls: ['./delete-demande.component.css']
})
export class DeleteDemandeComponent {
  @Output() closed = new EventEmitter<boolean>();
  @Input() demandeId:number=0
  @Output() saved = new EventEmitter<boolean>();
  alertError: boolean=false;
  constructor(private router: Router,private demandeService:DemandeService) { }

  ngOnInit(): void {
  }
//   save(){
//     this.demandeService.DeleteDemandeId(this.demandeId).subscribe(
//       retour=>{
//         this.saved.emit(true)
//         this.closed.emit(true);    
//         this.router.navigate(['/demande/'])
//       },
//       err => {
//       console.error('Observer got an error: ' + err)
//       this.alertError=true
//       },
//       () => this.saved.emit(true)
//     )
// }
save(){
  this.demandeService.DeleteDemandeId(this.demandeId).subscribe(
    res => {
      this.saved.emit(true);
    }
  );
  }

closeAction() {
  this.closed.emit(true);
}

}
