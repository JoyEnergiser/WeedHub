import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-footer-three',
  templateUrl: './footer-three.component.html',
  styleUrls: ['./footer-three.component.scss']
})
export class FooterThreeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	$('footer').footerReveal();
  }

}
