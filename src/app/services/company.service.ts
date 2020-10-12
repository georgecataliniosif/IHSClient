import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
    apiUrl:string = 'https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=';
    
    //tesco&apikey=
  constructor(public http:HttpClient) { }

  searchCompamny(searchedText: string): Observable<any> {
    let url = this.apiUrl + searchedText + '&apikey=' + 'W83WUV7SN29JZD7X';
    debugger
    return this.http.get(url);
}

}