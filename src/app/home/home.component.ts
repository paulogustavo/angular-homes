import { Component, OnInit } from '@angular/core';
import { HousingLocation } from '../housinglocation';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  housingLocationList: HousingLocation[] = [];
  filteredLocationList: HousingLocation[] = [];

  constructor(private housingService: HousingService) {

    this.housingService.getAllHousingLocations()
    .then(locations => {
      this.housingLocationList = locations;
      this.filteredLocationList = locations;
    })
    .catch(error => console.log(error));
   }

  ngOnInit(): void {
  }

  filterResults(text: string){
    if(!text){
      this.filteredLocationList = this.housingLocationList;
    }

    this.filteredLocationList = this.housingLocationList.filter(
      housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    );
  }



}
