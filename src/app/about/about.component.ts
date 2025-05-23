import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CountComponent } from '../count/count.component';

@Component({
  selector: 'app-about',
  imports: [RouterModule,CommonModule,CountComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
