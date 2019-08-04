import { Component, OnInit } from '@angular/core';
import { Product } from '../../shared/classes/product';
import { ProductsService } from '../../shared/services/products.service';

@Component({
  selector: 'app-home-nine',
  templateUrl: './home-nine.component.html',
  styleUrls: ['./home-nine.component.scss']
})
export class HomeNineComponent implements OnInit {

  public products: Product[] = [];
  
  constructor(private productsService: ProductsService) {   }

  ngOnInit() {
  	this.productsService.getProducts().subscribe(product => { 
  	  product.filter((item: Product) => {
         if(item.category == 'electronics')
         	this.products.push(item)
      })
    });
  }

}
