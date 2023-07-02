import { Component, OnInit } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housinglocation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  housingLocation: HousingLocation;

  constructor() {
    this.housingLocation = {
      id: 9999,
      name: 'Test Home',
      city: 'Test city',
      state: 'ST',
      photo: 'assets/example-house.jpg',
      availableUnits: 99,
      wifi: true,
      laundry: false,
    };
   }

  ngOnInit(): void {
  }

}
