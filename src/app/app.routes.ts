import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SecondPageComponent } from './pages/second-page/second-page.component';
import { PortfolioComponentComponent } from './ui/portfolio-component/portfolio-component.component';
import { ProductPageComponent } from './ui/product-page/product-page.component';

export const routes: Routes = [{
    path:'',
    component:HomePageComponent
},{
    path:'secondpage',
    component:SecondPageComponent
},{
    path:'portfolio',
    component:PortfolioComponentComponent
},{
    path:'products/:id',
    component:ProductPageComponent
}];
