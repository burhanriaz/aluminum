import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MainComponent } from './main/main.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImagesComponent } from './images/images.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HomepageComponent,NavbarComponent,MainComponent,GalleryComponent,ImagesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'burhan';
}
