import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../api.service';
import { SlicePipe } from '@angular/common';
import { StarRating } from 'angular-star-rating';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [SlicePipe],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss'
})
export class ProductPageComponent {

  route:any;
  api:any;
  fullStar:number=0;
  halfStarOrNot:boolean=false;
  constructor(route: ActivatedRoute,api:ApiService){
    this.route=route;
    this.api=api;
  }
  

  products:any;
  ngOnInit(): void {
    const id: string = this.route.snapshot.params.id;
    console.log(id);
    this.api.getProductById(id).subscribe((res:any)=>{
      this.products=res;
      console.log(res);
      this.fullStar=Math.floor(this.products.rating.rate);
      console.log(this.fullStar);
      if(this.products.rating.rate-this.fullStar>0.5){
        this.halfStarOrNot=true;
      }
      console.log(this.halfStarOrNot);
      
    })
    
    
  }
}
