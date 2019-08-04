import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../shared/classes/product';

@Component({
  selector: 'app-special-products-twelve',
  templateUrl: './special-products.component.html',
  styleUrls: ['./special-products.component.scss']
})
export class SpecialProductsTwelveComponent implements OnInit {
  
  @Input() products: Product;

  constructor() { }

  ngOnInit() {
  }

}
