import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collection-banner-six',
  templateUrl: './collection-banner.component.html',
  styleUrls: ['./collection-banner.component.scss']
})
export class CollectionBannerSixComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // Collection banner
  public category = [{
    image: 'assets/images/furniture/2banner1.jpg',
    save: 'save 50%',
    title: 'Sofa',
    link: '/home/left-sidebar/collection/furniture'
  }, {
    image: 'assets/images/furniture/2banner2.jpg',
    save: 'save 50%',
    title: 'Bean Bag',
    link: '/home/left-sidebar/collection/furniture'
  },{
    image: 'assets/images/furniture/2banner3.jpg',
    save: 'save 50%',
    title: 'Chair',
    link: '/home/left-sidebar/collection/furniture'
  }]

}
