import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-three',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderThreeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // Slick slider config
  public sliderConfig: any = {
    autoplay: true,
    autoplaySpeed: 3000
  };

}
