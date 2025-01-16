import { inject, Injectable } from '@angular/core';
import { CompanyDetailType } from '../model/exhibitor.type';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExhibitorService {
  companyList: Array<CompanyDetailType> = []
  http = inject(HttpClient) //Inject to use http method

  getCompanyListListFromApi() {
    // const baseUrl =`https://staging-fha-2024.occamlab.com.sg/api/`
    // const companyListApi = baseUrl + 'exhibitor-company-list'
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.get<Array<CompanyDetailType>>('/api/exhibitor-company-list', {
      headers
    })
  }

  getCountryListListFromApi() {
    return this.http.get<Array<CompanyDetailType>>('https://staging-fha-2024.occamlab.com.sg/public/provinces.json')
  }
  constructor() { }
}
