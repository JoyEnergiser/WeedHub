import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../shared/classes/product';
@Component({
  selector: 'app-product-collection',
  templateUrl: './product-collection.component.html',
  styleUrls: ['./product-collection.component.scss']
})
export class ProductCollectionComponent implements OnInit {
 
  @Input() products: Product;

  constructor() { }

  ngOnInit() {
  }

}
