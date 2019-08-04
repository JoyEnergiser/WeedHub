import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Product } from '../../../shared/classes/product';

@Component({
  selector: 'app-metro-product',
  templateUrl: './metro-product.component.html',
  styleUrls: ['./metro-product.component.scss']
})
export class MetroProductComponent implements OnInit {
  
  @Input() products: Product;
  
  constructor() { }

  ngOnInit() { 

  }

}
