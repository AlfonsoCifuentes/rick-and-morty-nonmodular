import { Component, OnInit } from '@angular/core';
import { GetFromApiService } from 'src/app/pages/services/get-from-api.service';
import { ILocation } from '../../models/ilocation';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.scss']
})
export class LocationListComponent implements OnInit {
  public locations: ILocation[] = [];
  constructor(private getFromApiService: GetFromApiService) { }

  ngOnInit(): void {
    this.recoverlocations();
  }

  public recoverlocations(){
    this.getFromApiService.getData("location").subscribe((data: any) => {
      const results: ILocation[] =  data.results;
      const formattedResults = results.map (({ name, type, dimension }) => ({
        name,
        type,
        dimension

      }))
      this.locations =  formattedResults;
    })
  }
}
