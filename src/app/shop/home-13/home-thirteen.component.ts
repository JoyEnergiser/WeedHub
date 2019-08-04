import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from '../../shared/classes/product';
import { ProductsService } from '../../shared/services/products.service';
declare var $: any;

@Component({
  selector: 'app-home-thirteen',
  templateUrl: './home-thirteen.component.html',
  styleUrls: ['./home-thirteen.component.scss']
})
export class HomeThirteenComponent implements OnInit, OnDestroy {

  public products: Product[] = [];
  
  constructor(private productsService: ProductsService) {   }

  ngOnInit() {
  	this.productsService.getProducts().subscribe(product => { 
  	  product.filter((item: Product) => {
         if(item.category == 'tools')
         	this.products.push(item)
      })
    });
    document.body.classList.add('tools-bg'); // Add class in body
    document.getElementsByClassName("header-type")[0].classList.add("header-tools");  // Change header 4 class
    
  }

  ngOnDestroy(){
    document.body.classList.remove('tools-bg');
    document.getElementsByClassName("header-type")[0].classList.remove("header-tools");
  }

}
