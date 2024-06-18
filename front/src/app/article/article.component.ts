import { Component } from '@angular/core';
import { ClrDatagridSortOrder } from '@clr/angular';
import { ArticleService } from './article.service';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  descSort = ClrDatagridSortOrder.DESC;
show:boolean=false;
articleId: number=0;
  constructor(private serviceDemande: ArticleService){}
  ngOnInit(): void {
    this.getAllListe()

  }
  getAllListe(){
    this.serviceDemande.getALLArticle().subscribe(data=>{
      this.articleId=data[0]

      console.log(data[0])
    })
  }
  saveAction(){
this.articleId=this.articleId
  }
  deleteAction(id:number){
    this.articleId=id
    this.show= true;
  }

  closeAction() {
    this.show = false;
  }  
}




