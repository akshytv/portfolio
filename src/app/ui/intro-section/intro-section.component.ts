import { Component, Input } from '@angular/core';
import { ButtonComponentComponent } from "../button-component/button-component.component";
import { dataCard } from '../../interface/component.inerface';

@Component({
  selector: 'app-intro-section',
  standalone: true,
  imports: [ButtonComponentComponent],
  templateUrl: './intro-section.component.html',
  styleUrl: './intro-section.component.scss'
})
export class IntroSectionComponent {
  @Input() data:dataCard={
    id:0,
    imageurl:'',
    description:'',
    title:''
  }
}
