import { Component } from '@angular/core';
import { EquipmentsComponent } from "../equipments/equipments.component";
import { ServicesComponent } from '../services/services.component';

@Component({
  selector: 'app-home',
  standalone : true,
  imports: [EquipmentsComponent, ServicesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
