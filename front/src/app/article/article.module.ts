import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleRoutingModule } from './article-routing.module';
import { ArticleComponent } from './article.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { DeleteArticleComponent } from './delete-article/delete-article.component';
import { DetailArticleComponent } from './detail-article/detail-article.component';
import { DeteleArticleComponent } from './detele-article/detele-article.component';
import { ClarityModule, ClrStepperModule } from '@clr/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ArticleComponent,
    AddArticleComponent,
    DeleteArticleComponent,
    DetailArticleComponent,
    DeteleArticleComponent,
  ],
  imports: [
    CommonModule,ArticleRoutingModule,FormsModule,ReactiveFormsModule,ClarityModule,ClrStepperModule
  ]
})
export class ArticleModule { }
