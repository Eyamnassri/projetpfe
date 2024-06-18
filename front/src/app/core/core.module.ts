import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ClarityModule, ClrIconModule } from '@clr/angular';
import { ClarityIcons, boltIcon, bugIcon, certificateIcon, clipboardIcon, cogIcon, contractIcon, folderIcon, homeIcon, loginIcon, logoutIcon, pencilIcon, plusIcon, sadFaceIcon, shieldIcon, sunIcon, userIcon, volumeIcon} from '@cds/core/icon';
import { RouterModule } from '@angular/router';
import { UserModule } from '../user/user.module';

ClarityIcons.addIcons(userIcon,clipboardIcon,contractIcon, homeIcon,boltIcon,sadFaceIcon,bugIcon,shieldIcon,certificateIcon,plusIcon,pencilIcon,volumeIcon,sunIcon,cogIcon,folderIcon,logoutIcon,loginIcon);



@NgModule({
  declarations: [
    HeaderComponent,
    SideNavComponent
  ],
  imports: [
    CommonModule,ClarityModule, ClrIconModule ,RouterModule,UserModule
  ],exports:[    HeaderComponent,
    SideNavComponent]
})
export class CoreModule { }
