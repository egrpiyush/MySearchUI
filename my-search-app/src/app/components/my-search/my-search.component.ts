import { Component, OnInit } from '@angular/core';
import { SearchInput } from '../../models/search-input'
import { SearchResponse } from '../../models/search-response'
import { SearchService } from '../../services/search.service'
import * as moment from 'moment';

@Component({
  selector: 'app-my-search',
  templateUrl: './my-search.component.html',
  styleUrls: ['./my-search.component.css']
})
export class MySearchComponent implements OnInit {
  public searchInput = new SearchInput();
  public searchResponse = new SearchResponse();
  constructor(private searchService: SearchService) {
    
   }

  ngOnInit(): void {
    
  }

  onSubmit(){
    debugger;
    this.searchService.getStaticSearch(this.searchInput).subscribe((searchResponse) => {
      debugger;
      this.searchResponse = searchResponse;

    });
  }  

}
