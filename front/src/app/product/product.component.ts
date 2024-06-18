import { Component } from '@angular/core';
import { ClrDatagridSortOrder } from '@clr/angular';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  descSort = ClrDatagridSortOrder.DESC;

}
