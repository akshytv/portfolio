import { Component, Input } from '@angular/core';
import { dataCard, fetchedData } from '../../interface/component.inerface';
import { SlicePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-my-card',
  standalone: true,
  imports: [SlicePipe,RouterLink],
  templateUrl: './my-card.component.html',
  styleUrl: './my-card.component.scss'
})

export class MyCardComponent {
  @Input() data:fetchedData={
    id: 0,
    image:'',
    title:'',
    description:'',
  };

 
  
}
