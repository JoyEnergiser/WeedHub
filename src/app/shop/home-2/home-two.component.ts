import { Component, OnInit, OnDestroy} from '@angular/core';
import { Product } from '../../shared/classes/product';
import { ProductsService } from '../../shared/services/products.service';

@Component({
  selector: 'app-home-two',
  templateUrl: './home-two.component.html',
  styleUrls: ['./home-two.component.scss']
})
export class HomeTwoComponent implements OnInit, OnDestroy {
  
  public products: Product[] = [];

  constructor(private productsService: ProductsService) { 
  	this.productsService.getProducts().subscribe(product => this.products = product);
  }

  ngOnInit() {
  	document.body.classList.add('box-layout-body');
  }

  ngOnDestroy() {
  	document.body.classList.remove('box-layout-body');
  }

}
