import { HttpClient } from '@angular/common/http';
import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'; 
import { HomeService } from 'src/app/services/home.service'; '../../services/home.service';
declare var $: any;


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SliderComponent implements OnInit {

  category : any[]
	responsiveOptions;
  constructor(private router: Router, private route: ActivatedRoute,
    private http:HttpClient,
    private homeService:HomeService){
   
    this.homeService.getCategoriesforCarousel().subscribe(category=>{
      this.category = category
      console.log(this.category)
    })
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];
  }

  ngOnInit() {
    $.getScript('assets/js/menu.js');
  }

  // Slick slider config
  public sliderConfig: any = {
    autoplay: true,
    autoplaySpeed: 5000,
    vertical: true,
    dots : true,
    infinite : false,
    arrows:false,
    // draggable:true,
    dotsClass:"slick-dots"
    // infinite: false,
  };


  
}
