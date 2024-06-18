import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule, ClrIconModule } from '@clr/angular';
import { CoreComponent } from './core/core.component';
import { CoreModule } from './core/core.module';
import { AuthModule } from './auth/auth.module';
import { DashbordModule } from './dashbord/dashbord.module';
import { ClarityIcons, boltIcon, bugIcon, certificateIcon, cogIcon, detailsIcon, eventIcon, formIcon, homeIcon, listIcon, logoutIcon, pdfFileIcon, pencilIcon, plusIcon, rackServerIcon, sadFaceIcon, shieldCheckIcon, shieldIcon, sunIcon, trashIcon, userIcon, usersIcon, volumeIcon} from '@cds/core/icon';
import { HttpClientModule} from '@angular/common/http';

import { ProductModule } from './product/product.module';
import { ArticleModule } from './article/article.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CahierchargeModule } from './cahiercharge/cahiercharge.module';
import { CommissionsModule } from './commissions/commissions.module';
import { UserModule } from './user/user.module';
import { EtatModule } from './demande/etat/etat.module';





ClarityIcons.addIcons(userIcon,homeIcon,boltIcon,sadFaceIcon,bugIcon,shieldIcon,certificateIcon,plusIcon,pencilIcon,pdfFileIcon,volumeIcon,sunIcon,cogIcon,rackServerIcon,usersIcon,listIcon,formIcon,logoutIcon,trashIcon,detailsIcon,shieldCheckIcon,eventIcon);
@NgModule({
  declarations: [
    AppComponent,
    CoreComponent,
  
    
 
 
  ],
  imports: [
    BrowserModule,ClarityModule,ClrIconModule,FormsModule,ReactiveFormsModule,   HttpClientModule,BrowserAnimationsModule,
    AppRoutingModule,CoreModule,AuthModule,DashbordModule,ProductModule,ArticleModule,CahierchargeModule,CommissionsModule,UserModule,EtatModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
