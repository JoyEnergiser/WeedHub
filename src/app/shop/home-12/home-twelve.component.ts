import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Product } from '../../shared/classes/product';
import { ProductsService } from '../../shared/services/products.service';

@Component({
  selector: 'app-home-twelve',
  templateUrl: './home-twelve.component.html',
  styleUrls: ['./home-twelve.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeTwelveComponent implements OnInit, OnDestroy {

  public products: Product[] = [];
  
  constructor(private productsService: ProductsService) {   }

  ngOnInit() {
  	this.productsService.getProducts().subscribe(product => { 
  	  product.filter((item: Product) => {
         if(item.category == 'gym')
         	this.products.push(item)
      })
    });
    // Change header 4 class
    document.getElementById("header-type").classList.add("header-gym");
    // Change Heder logo
    document.getElementById("headerlogo").innerHTML ="<img src='assets/images/icon/logo-2.png'>";
    // Change footer logo
    document.getElementById("footerlogo").innerHTML ="<img src='assets/images/icon/logo-2.png'>";
  }

  ngOnDestroy() {

  }
  
}
