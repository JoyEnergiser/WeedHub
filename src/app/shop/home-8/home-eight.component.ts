import { Component, OnInit } from '@angular/core';
import { Product } from '../../shared/classes/product';
import { ProductsService } from '../../shared/services/products.service';

@Component({
  selector: 'app-home-eight',
  templateUrl: './home-eight.component.html',
  styleUrls: ['./home-eight.component.scss']
})
export class HomeEightComponent implements OnInit {

  public products: Product[] = [];
  
  constructor(private productsService: ProductsService) {   }

  ngOnInit() {
  	this.productsService.getProducts().subscribe(product => { 
  	  product.filter((item: Product) => {
         if(item.category == 'beauty')
         	this.products.push(item)
      })
    });
  }

}
