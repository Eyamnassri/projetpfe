import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './article.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { DeleteArticleComponent } from './delete-article/delete-article.component';
import { DetailArticleComponent } from './detail-article/detail-article.component';
import { DeteleArticleComponent } from './detele-article/detele-article.component';

const routes: Routes = [
  {path:'',component:ArticleComponent },
  {path:'addArticle',component:AddArticleComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule { }
