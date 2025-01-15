import { Component, input } from '@angular/core';
import { EventSelectionComponent } from '../components/event-selection/event-selection.component';

@Component({
  selector: 'app-home',
  imports: [EventSelectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
homeMessage = input("From Hein!")
}
