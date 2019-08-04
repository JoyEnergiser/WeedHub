import { Component, OnInit } from '@angular/core';
import { Product } from '../../shared/classes/product';
import { ProductsService } from '../../shared/services/products.service';

@Component({
  selector: 'app-home-eleven',
  templateUrl: './home-eleven.component.html',
  styleUrls: ['./home-eleven.component.scss']
})
export class HomeElevenComponent implements OnInit {
  
  public products: Product[] = [];
  
  constructor(private productsService: ProductsService) {   }

  ngOnInit() {
  	this.productsService.getProducts().subscribe(product => { 
  	  product.filter((item: Product) => {
         if(item.category == 'metro')
         	this.products.push(item)
      })
    });
  }

}
