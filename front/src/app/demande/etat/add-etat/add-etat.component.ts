import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EtatService } from '../etat.service';
import { EtatDemande } from '../etat';

@Component({
  selector: 'app-add-etat',
  templateUrl: './add-etat.component.html',
  styleUrls: ['./add-etat.component.css']
})

export class AddEtatComponent {

  @Input() demandeId:number=0
  @Input() items: { label: string, value: string }[] = [];
  @Output() checkboxChanged = new EventEmitter<string[]>();
  constructor(private etatService:EtatService ) { }

  // Example methods using the service


  // getEtatList() {
  //   this.etatService.getListeEtat().subscribe(response => {
  //     // Handle response
  //   });
  // }
  onCheckboxChanged(value: string) {
    console.log('Checkbox value:', value);
    this.createEtat(value)
    // You can perform any further logic here based on the checkbox value and its checked state
  }
  createEtat(createEtatData:any) {
    console.log(createEtatData)
    let etat = new EtatDemande();
    etat.libelleEtat=createEtatData
etat.codeEtat=createEtatData
etat.demandeId =this.demandeId
    this.etatService.create(etat).subscribe(response => {
      // Handle response
      console.log(response)
    });
  }
  

}
