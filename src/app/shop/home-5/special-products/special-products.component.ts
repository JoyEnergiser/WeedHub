import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../shared/classes/product';

@Component({
  selector: 'app-special-products-five',
  templateUrl: './special-products.component.html',
  styleUrls: ['./special-products.component.scss']
})
export class SpecialProductsFiveComponent implements OnInit {
  
  @Input() products: Product;

  constructor() { }

  ngOnInit() {
  }

}
