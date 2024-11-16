import { Component } from '@angular/core';
import { PortfolioComponentComponent } from "../../ui/portfolio-component/portfolio-component.component";

@Component({
  selector: 'app-third-page',
  standalone: true,
  imports: [PortfolioComponentComponent],
  templateUrl: './third-page.component.html',
  styleUrl: './third-page.component.scss'
})
export class ThirdPageComponent {

}
