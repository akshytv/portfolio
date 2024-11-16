import { Component } from '@angular/core';
import { IntroSectionComponent } from "../intro-section/intro-section.component";
import { AboutEductionComponent } from "../about-eduction/about-eduction.component";
import { Title } from '@angular/platform-browser';
import { AboutExperianceComponent } from "../about-experiance/about-experiance.component";
import { ContactFormComponent } from "../contact-form/contact-form.component";

@Component({
  selector: 'app-portfolio-component',
  standalone: true,
  imports: [IntroSectionComponent, AboutEductionComponent, AboutExperianceComponent, ContactFormComponent],
  templateUrl: './portfolio-component.component.html',
  styleUrl: './portfolio-component.component.scss'
})
export class PortfolioComponentComponent {
 educationData=[
  {
    id: 1,
    imageurl: 'https://media.collegedekho.com/media/img/institute/crawled_images/None/nss.jpg?width=1080',
    description:'Completed Btech in electrical and electronics from NSS College of Engineering with first class',
    title:'Bachelors'
   },{
    id:2,
    imageurl: 'https://media.collegedekho.com/media/img/institute/crawled_images/None/nss.jpg?width=1080',
    description:'Completed my primary education from GHSS Payambra in 2018 in PCMB',
    title:'Primary Education'

   }
 ]
 experianceData=[ {
  id: 1,
  imageurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyUYDfrrSrcjsBmfIknrWlD7ricxnt5q1V6ey0UNIPiVmrXTzYjFcIiQ6njOPycFpcDac&usqp=CAU',
  description:'I have hands-on experience in software development, collaborating with cross-functional teams to build and enhance applications. Skilled in project management, agile methodologies, and integrating APIs, I strive to deliver efficient solutions. My role as scrum master in a Content Management System project has strengthened my organizational and leadership abilities',
  title:'Trainee'
 },{
  id:2,
  imageurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyUYDfrrSrcjsBmfIknrWlD7ricxnt5q1V6ey0UNIPiVmrXTzYjFcIiQ6njOPycFpcDac&usqp=CAU',
  description:'I have hands-on experience in software development, collaborating with cross-functional teams to build and enhance applications. Skilled in project management, agile methodologies, and integrating APIs, I strive to deliver efficient solutions. My role as scrum master in a Content Management System project has strengthened my organizational and leadership abilities',
  title:'Internship'

 }]

 introData={
  id:1,
  imageurl:'https://st.depositphotos.com/1743476/1276/i/450/depositphotos_12765264-stock-photo-smiling-business-man.jpg',
  description:'Aspiring Software Developer currently working as trainee at Experion Technologies Pvt Ltd',
  title:'Akshay TV'
 }
}
