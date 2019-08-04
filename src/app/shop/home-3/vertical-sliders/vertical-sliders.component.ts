import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../shared/classes/product';
import { ProductsService } from '../../../shared/services/products.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-vertical-sliders',
  templateUrl: './vertical-sliders.component.html',
  styleUrls: ['./vertical-sliders.component.scss']
})
export class VerticalSlidersComponent implements OnInit {
  
  @Input() products: Product;
  
  constructor(public productsService: ProductsService) { }

  ngOnInit() {
  }

}
