import { Component, Input } from '@angular/core';
import { dataCard } from '../../interface/component.inerface';

@Component({
  selector: 'app-about-experiance',
  standalone: true,
  imports: [],
  templateUrl: './about-experiance.component.html',
  styleUrl: './about-experiance.component.scss'
})
export class AboutExperianceComponent {
  @Input() data:dataCard={
    id:0,
    description:'',
    title:'',
    imageurl:''
  }
}
