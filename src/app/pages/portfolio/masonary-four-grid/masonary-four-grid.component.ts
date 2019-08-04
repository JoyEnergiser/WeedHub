import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-masonary-four-grid',
  templateUrl: './masonary-four-grid.component.html',
  styleUrls: ['./masonary-four-grid.component.scss']
})
export class MasonaryFourGridComponent implements OnInit, AfterViewInit {
  
  @ViewChild('gallery', { static: true }) galleryElement: ElementRef;	

  constructor() { }

  ngOnInit() {
     $.getScript('assets/js/masonary.js');
  }

  ngAfterViewInit() {
  	$(this.galleryElement.nativeElement).magnificPopup({
        delegate: 'a',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        image: {
            verticalFit: true,
            titleSrc: function(item) {
                return item.el.attr('title') + ' &middot;';
            }
        },
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
            duration: 300, // don't foget to change the duration also in CSS
            opener: function(element) {
                return element.find('img');
            }
        }
    });   
  }

}
