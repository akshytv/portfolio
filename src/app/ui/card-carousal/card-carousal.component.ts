import { Component, Input } from '@angular/core';
import { MyCardComponent } from "../my-card/my-card.component";
import { ApiService } from '../../api.service';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { fetchedData } from '../../interface/component.inerface';

@Component({
  selector: 'app-card-carousal',
  standalone: true,
  imports: [CarouselModule, MyCardComponent],
  templateUrl: './card-carousal.component.html',
  styleUrl: './card-carousal.component.scss'
})
export class CardCarousalComponent {
  constructor(public api:ApiService){}
  @Input() category:any='';
  products:any={
    id:0,
    description:'',
    title:'',
    image:'',
  }
  ngOnInit(){
      this.api.getProductsByCategories(this.category).subscribe((res:any)=>{
        this.products=res;
      })
  }
  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      1150: {
        items: 4
      }
    },
    nav: true
  }
   
}
