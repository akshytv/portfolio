import { Component, Input } from '@angular/core';
import { dataCard } from '../../interface/component.inerface';

@Component({
  selector: 'app-about-eduction',
  standalone: true,
  imports: [],
  templateUrl: './about-eduction.component.html',
  styleUrl: './about-eduction.component.scss'
})
export class AboutEductionComponent {
 @Input() educationData:dataCard={
  id:0,
  imageurl: '',
  description: '',
  title: ''
 }
}
