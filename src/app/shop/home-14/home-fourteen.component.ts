import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Product } from '../../shared/classes/product';
import { ProductsService } from '../../shared/services/products.service';
declare var $: any;

@Component({
  selector: 'app-home-fourteen',
  templateUrl: './home-fourteen.component.html',
  styleUrls: ['./home-fourteen.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeFourteenComponent implements OnInit {

  public products: Product[] = [];
  
  constructor(private productsService: ProductsService) {   }

  ngOnInit() {
  	this.productsService.getProducts().subscribe(product => { 
  	  product.filter((item: Product) => {
         if(item.category == 'marijuana')
         	this.products.push(item)
      })
    });
    document.getElementsByClassName("header-type")[0].classList.add("green-gradient");
    document.getElementsByClassName("footer-type")[0].classList.add("footer-5");
    // Change Heder logo
    document.getElementsByClassName("headerlogo")[0].innerHTML ="<img src='assets/images/icon/logo-3.png'>";
  }

}
