import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { ClarityModule, ClrIconModule } from '@clr/angular';


@NgModule({
  declarations: [
    ProductComponent,
    AddProductComponent,
    DeleteProductComponent,
    DetailProductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,ClarityModule,ClrIconModule
  ]
})
export class ProductModule { }
