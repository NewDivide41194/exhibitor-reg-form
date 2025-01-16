import { Component, inject, input, OnInit, signal } from '@angular/core';
import { ExhibitorService } from '../../services/exhibitor.service';
import { CompanyDetailType, EventType } from '../../model/exhibitor.type';
import { catchError } from 'rxjs';
import { CardModule } from 'primeng/card';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SelectModule } from 'primeng/select';
import { RegistrationFormComponent } from "../registration-form/registration-form.component";


@Component({
  selector: 'app-event-selection',
  imports: [CommonModule, FormsModule, CardModule, RadioButtonModule, SelectModule, RegistrationFormComponent], // import module
  templateUrl: './event-selection.component.html',
  styleUrl: './event-selection.component.scss'
})
export class EventSelectionComponent implements OnInit {
  message = input("From Hein!")
  exhibitorService = inject(ExhibitorService);
  companyList = signal<Array<CompanyDetailType>>([]);
  selectedCategory: string = "option-1"
  eventType: Array<EventType> = [
    {
      id: 1,
      name: 'FHA-Food & Beverage'
    },
    {
      id: 2,
      name: 'Prowine Singapore'
    }
  ]
  ngOnInit(): void {
    // this.exhibitorService.getCompanyListListFromApi()
    //   .pipe(
    //     catchError((error) => {
    //       console.log(error);
    //       throw error;
    //     })
    //   )
    //   .subscribe((company) => {
    //     this.companyList.set(company)
    //   })
  }

}
