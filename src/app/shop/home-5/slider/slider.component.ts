import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-five',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderFiveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // Slick slider config
  public sliderConfig: any = {
    autoplay: true,
    autoplaySpeed: 3000
  };

}
