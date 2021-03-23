import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { getStaticSearchUrl } from '../config/apiUrl'
import { getGoogleSearchUrl } from '../config/apiUrl'
import { SearchInput } from '../models/search-input'
import { SearchResponse } from '../models/search-response'

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  getStaticSearch(searchInput: SearchInput): Observable<SearchResponse>{
    debugger;
    let params = new HttpParams().set("searchFor", searchInput.searchFor)
    .set("searchInUrl", searchInput.searchInUrl)
    .set("urlOfInterest", searchInput.urlOfInterest);
    return this.http.get<SearchResponse>(getStaticSearchUrl, { params: params });
  }  
}
