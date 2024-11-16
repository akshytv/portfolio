import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { CardCarousalComponent } from "../../ui/card-carousal/card-carousal.component";
import { fetchedData } from '../../interface/component.inerface';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CardCarousalComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  constructor(public api:ApiService){}
  categories:[]=[];
  
  ngOnInit(){
    this.api.getCategories().subscribe((res:any)=>{
      this.categories=res;
      console.log(this.categories);
     
    })
  }
  
}
