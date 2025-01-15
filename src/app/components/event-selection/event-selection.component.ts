import { Component, inject, input, OnInit, signal } from '@angular/core';
import { ExhibitorService } from '../../services/exhibitor.service';
import { CompanyDetailType } from '../../model/exhibitor.type';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-event-selection',
  imports: [],
  templateUrl: './event-selection.component.html',
  styleUrl: './event-selection.component.scss'
})
export class EventSelectionComponent implements OnInit {
  message = input("From Hein!")
  exhibitorService = inject(ExhibitorService);
  companyList = signal<Array<CompanyDetailType>>([]);

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
