import { Component, OnInit } from '@angular/core';
import { Product } from '../../shared/classes/product';
import { ProductsService } from '../../shared/services/products.service';

@Component({
  selector: 'app-home-four',
  templateUrl: './home-four.component.html',
  styleUrls: ['./home-four.component.scss']
})
export class HomeFourComponent implements OnInit {

  public products: Product[] = [];
  
  constructor(private productsService: ProductsService) {   }

  ngOnInit() {
  	this.productsService.getProducts().subscribe(product => { 
  	  product.filter((item: Product) => {
         if(item.category == 'vegetable')
         	this.products.push(item)
      })
    });
  }

}
