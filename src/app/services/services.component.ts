// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-images',
//   imports: [],
//   templateUrl: './images.component.html',
//   styleUrl: './images.component.css'
// })
// export class ImagesComponent {

// }


import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  services = [
    {
      title: 'Aluminum Systems',
      image: 'https://aluminum.sammangroup.com/wp-content/uploads/2023/07/ejemplos-de-muro-cortina-2-1024x640.jpg',
      description: 'We design and install durable and sleek aluminum curtain wall systems.'
    },
    {
      title: 'Curtain Walls',
      image: 'https://aluminum.sammangroup.com/wp-content/uploads/2023/07/klizna_stijena-1-1024x667.jpg',
      description: 'Modern glass doors and windows with aluminum framing for all types of buildings.'
    },
    {
      title: 'Windows & Doors',
      image: 'https://aluminum.sammangroup.com/wp-content/uploads/2023/07/curtain-wall-building-1779826-1200x800-1-1024x683.webp',
      description: 'Custom skylights for commercial and residential properties to maximize natural light.'
    },
    {
      title: 'Glass Works',
      image: 'https://aluminum.sammangroup.com/wp-content/uploads/2023/07/1-1536x1023.jpg',
      description: 'We provide advanced aluminum cladding systems for exterior finishes.'
    },
    {
      title: 'Glass Works',
      image: 'https://aluminum.sammangroup.com/wp-content/uploads/2023/07/1-1536x1023.jpg',
      description: 'We provide advanced aluminum cladding systems for exterior finishes.'
    }
    ,
    {
      title: 'cladding works',
      image: 'https://aluminum.sammangroup.com/wp-content/uploads/2023/07/1-1536x1023.jpg',
      description: 'We provide advanced aluminum cladding systems for exterior finishes.'
    }
    ,
    {
      title: 'Art glass',
      image: 'https://aluminum.sammangroup.com/wp-content/uploads/2023/07/1-1536x1023.jpg',
      description: 'We provide advanced aluminum cladding systems for exterior finishes.'
    }
    ,
    {
      title: 'Accessories',
      image: 'https://aluminum.sammangroup.com/wp-content/uploads/2023/07/1-1536x1023.jpg',
      description: 'We provide advanced aluminum cladding systems for exterior finishes.'
    }
    ,
    {
      title: 'Sky light',
      image: 'https://aluminum.sammangroup.com/wp-content/uploads/2023/07/1-1536x1023.jpg',
      description: 'We provide advanced aluminum cladding systems for exterior finishes.'
    }
    ,
    {
      title: 'Roller shutter',
      image: 'https://aluminum.sammangroup.com/wp-content/uploads/2023/07/1-1536x1023.jpg',
      description: 'We provide advanced aluminum cladding systems for exterior finishes.'
    }
    ,
    {
      title: 'Revolving doors',
      image: 'https://aluminum.sammangroup.com/wp-content/uploads/2023/07/1-1536x1023.jpg',
      description: 'We provide advanced aluminum cladding systems for exterior finishes.'
    }
    ,
    {
      title: 'Sliding doors',
      image: 'https://aluminum.sammangroup.com/wp-content/uploads/2023/07/1-1536x1023.jpg',
      description: 'We provide advanced aluminum cladding systems for exterior finishes.'
    }
    ,
    {
      title: 'Stairs & hand rails',
      image: 'https://aluminum.sammangroup.com/wp-content/uploads/2023/07/1-1536x1023.jpg',
      description: 'We provide advanced aluminum cladding systems for exterior finishes.'
    }
    ,
    {
      title: 'partitions systems',
      image: 'https://aluminum.sammangroup.com/wp-content/uploads/2023/07/1-1536x1023.jpg',
      description: 'We provide advanced aluminum cladding systems for exterior finishes.'
    }
    ,
    {
      title: 'Showers',
      image: 'https://aluminum.sammangroup.com/wp-content/uploads/2023/07/1-1536x1023.jpg',
      description: 'We provide advanced aluminum cladding systems for exterior finishes.'
    }
  ];
}
