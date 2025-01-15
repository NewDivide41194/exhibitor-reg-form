import { inject, Injectable } from '@angular/core';
import { CompanyDetailType } from '../model/exhibitor.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExhibitorService {
  companyList: Array<CompanyDetailType> = [
    {
      id: 0,
      name : "Myanmar"
    }
  ]
  http = inject(HttpClient) //Inject to use http method

  getCompanyListListFromApi() {
    const baseUrl =`https://staging-fha-2024.occamlab.com.sg/api/`
    const companyListApi = baseUrl + 'exhibitor-company-list'
    return this.http.get<Array<CompanyDetailType>>(companyListApi)
  } 
  constructor() { }
}
