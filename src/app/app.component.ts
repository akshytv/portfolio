import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyCarousalComponent } from "./ui/my-carousal/my-carousal.component";
import { MyDescriptionComponent } from "./ui/my-description/my-description.component";
import { MyCardComponent } from "./ui/my-card/my-card.component";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { SecondPageComponent } from "./pages/second-page/second-page.component";
import { NavbarComponentComponent } from "./ui/navbar-component/navbar-component.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  
  
}
