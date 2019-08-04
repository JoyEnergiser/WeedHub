import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Product } from '../../shared/classes/product';
import { ProductsService } from '../../shared/services/products.service';

@Component({
  selector: 'app-home-ten',
  templateUrl: './home-ten.component.html',
  styleUrls: ['./home-ten.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeTenComponent implements OnInit, OnDestroy {

  public products: Product[] = [];
  
  constructor(private productsService: ProductsService) {   }

  ngOnInit() {
  	this.productsService.getProducts().subscribe(product => { 
  	  product.filter((item: Product) => {
         if(item.category == 'pets')
         	this.products.push(item)
      })
    });
    // hide search widgets
    document.getElementById("search-widgets").style.display = "none";
  }

  ngOnDestroy() {
    // show search widgets
    document.getElementById("search-widgets").style.display = "block";
  }

}
