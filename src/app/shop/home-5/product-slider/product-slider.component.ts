import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../shared/classes/product';

@Component({
  selector: 'app-product-slider-five',
  templateUrl: './product-slider.component.html',
  styleUrls: ['./product-slider.component.scss']
})
export class ProductSliderFiveComponent implements OnInit {
  
  // Get product Using Input
  @Input() products: Product;

  constructor() { }

  ngOnInit() {
  }

  // Slick slider config
  public productSlideConfig = {
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [{
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 420,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };

}
