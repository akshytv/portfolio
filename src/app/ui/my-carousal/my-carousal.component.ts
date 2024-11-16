import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-my-carousal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-carousal.component.html',
  styleUrl: './my-carousal.component.scss'
})
export class MyCarousalComponent {
  @Input() images=[{
    id:1,
    url:'https://dwq3yv87q1b43.cloudfront.net/public/blogs/fit-in/1350x300/Blog_2021040844736f0b68fc25559380a7535f9bdd13.png',

  },{
    id:2,
    url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSQTL1aCP1g9G1jsyBJuVUKEWJFn_7O6AQgw&s',
  },{
    id:3,
    url:'https://media.istockphoto.com/id/695486050/photo/aerial-landscapes.jpg?s=612x612&w=0&k=20&c=vDTQbGbnfg5_URlNTfdvaaZoQiwqe8dqxNq3pTn99Uw=',
  }]

}
