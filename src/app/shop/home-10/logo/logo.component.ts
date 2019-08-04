import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo-ten',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoTenComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // Slick slider config
  public logoSlideConfig: any = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [{
        breakpoint: 1367,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };

  // Logo
  public logo = [{
      image: 'assets/images/logos/9.png',
    }, {
      image: 'assets/images/logos/10.png',
    }, {
      image: 'assets/images/logos/11.png',
    }, {
      image: 'assets/images/logos/12.png',
    }, {
      image: 'assets/images/logos/13.png',
    }, {
      image: 'assets/images/logos/14.png',
    }, {
      image: 'assets/images/logos/15.png',
    }, {
      image: 'assets/images/logos/16.png',        
  }]

}
