import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../shared/classes/product';

@Component({
  selector: 'app-special-products',
  templateUrl: './special-products.component.html',
  styleUrls: ['./special-products.component.scss']
})
export class SpecialProductsComponent implements OnInit {
  
  @Input() products: Product;

  constructor() { }

  ngOnInit() {   }


}
