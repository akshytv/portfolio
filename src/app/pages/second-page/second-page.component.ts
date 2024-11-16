import { Component } from '@angular/core';
import { MyCardComponent } from '../../ui/my-card/my-card.component';

@Component({
  selector: 'app-second-page',
  standalone: true,
  imports: [MyCardComponent],
  templateUrl: './second-page.component.html',
  styleUrl: './second-page.component.scss'
})
export class SecondPageComponent {
 data:any=[
  {
    "id": 1,
    "title": "DU1",
    "description": "Responsible for end-to-end application development and maintenance, ensuring smooth operation and updates to client software systems.",
    "imageurl": "https://example.com/images/application-development.jpg"
  },
  {
    "id": 2,
    "title": "DU2",
    "description": "Manages cloud and infrastructure services, including cloud migration, server management, and technical support for cloud-based solutions.",
    "imageurl": "https://example.com/images/cloud-infrastructure.jpg"
  },
  {
    "id": 3,
    "title": "DU3",
    "description": "Provides data analytics and business intelligence solutions, utilizing big data and BI tools to support client decision-making and strategic planning.",
    "imageurl": "https://example.com/images/data-analytics.jpg"
  },
  {
    "id": 4,
    "title": "DU4",
    "description": "Offers cybersecurity services, including threat assessment, vulnerability management, and proactive monitoring to safeguard client data.",
    "imageurl": "https://example.com/images/cybersecurity.jpg"
  },
  {
    "id": 5,
    "title": "DU5",
    "description": "Supports consulting and digital transformation, guiding clients through technology modernization and digital adoption strategies.",
    "imageurl": "https://example.com/images/digital-transformation.jpg"
  },
  {
    "id": 6,
    "title": "DU6",
    "description": "Focuses on quality assurance and testing, ensuring that applications meet high standards of performance, functionality, and security.",
    "imageurl": "https://example.com/images/quality-assurance.jpg"
  },
  {
    "id": 7,
    "title": "DU7",
    "description": "Provides IT infrastructure support and services, including network management, hardware support, and on-site technical assistance.",
    "imageurl": "https://example.com/images/it-infrastructure.jpg"
  },
  {
    "id": 8,
    "title": "DU8",
    "description": "Specializes in DevOps and automation, streamlining processes and improving efficiency through CI/CD and automated deployment solutions.",
    "imageurl": "https://example.com/images/devops-automation.jpg"
  }
]

}
