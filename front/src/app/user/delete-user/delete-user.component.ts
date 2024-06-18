import { Component,OnInit ,Input,Output, EventEmitter } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent {
  @Input("userId") 
  userId:any
  @Output() delete= new EventEmitter()
  @Output()  saved= new EventEmitter()
  constructor(private UserService: UserService) {}
  onDelete(){
    this.delete.emit(true)// active the event 
  }
    save() {
      this.UserService.DeleteUserId(this.userId).subscribe(
        (res: any) => { // Spécifier explicitement le type 'any' pour 'res'
          console.log(this.userId)
          this.saved.emit(true);
        })
  }
}