import { Component, input } from '@angular/core';
import { EventSelectionComponent } from '../components/event-selection/event-selection.component';
import { RegistrationFormComponent } from '../components/registration-form/registration-form.component';
import { ButtonModule } from 'primeng/button';
import { FluidModule } from 'primeng/fluid';
import { MyButtomComponent } from '../components/my-buttom/my-buttom.component';

@Component({
  selector: 'app-home',
  imports: [EventSelectionComponent, RegistrationFormComponent, ButtonModule, FluidModule, MyButtomComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
homeMessage = input("From Hein!")
}
